// 任务元数据行 (0.6.2, docs/API.MD 四) 单测: 解析/剥离/盖章 + 身份感知整表规范化
// 运行: node tests/js/test_task_meta.js
const { TaskManager, Config } = require('../../js/agent.js');
const assert = require('assert');

// 盖章语法跟随本端平台 (Windows=rem, Unix=#); 解析则两种语法都接受
const COMMENT = process.platform === 'win32' ? 'rem' : '#';
const meta = (id, updated) => `${COMMENT} kisama-task: id=${id} updated=${updated}`;
const hashMeta = (id, updated) => `# kisama-task: id=${id} updated=${updated}`;
const NOW = 1700000000000;

// ---------- 解析 / 剥离 / 盖章 ----------
assert.strictEqual(TaskManager.parseTaskMeta(`${hashMeta(100, 50)}\necho hi`).id, '100');
assert.strictEqual(TaskManager.parseTaskMeta(`${hashMeta(100, 50)}\necho hi`).updated, 50);
assert.strictEqual(TaskManager.parseTaskMeta(`rem kisama-task: id=200 updated=60\necho hi`).id, '200');
assert.strictEqual(TaskManager.parseTaskMeta(`REM KISAMA-TASK: id=1 updated=2\nx`).id, '1');
assert.strictEqual(TaskManager.parseTaskMeta(`#!/bin/sh\n${hashMeta(3, 4)}\nls`).id, '3');
assert.strictEqual(TaskManager.parseTaskMeta(`# kisama-task: id=9\necho hi`).updated, 0);
assert.strictEqual(TaskManager.parseTaskMeta('echo hi'), null);
assert.strictEqual(TaskManager.parseTaskMeta('a\nb\nc\n' + hashMeta(1, 1)), null);
assert.strictEqual(TaskManager.stripTaskMetaLine(`${hashMeta(1, 1)}\necho hi`), 'echo hi');
assert.strictEqual(TaskManager.stripTaskMetaLine(`#!/bin/sh\n${hashMeta(1, 1)}\nls`), '#!/bin/sh\nls');
assert.strictEqual(TaskManager.stripTaskMetaLine('echo hi'), 'echo hi');
assert.strictEqual(TaskManager.withTaskMeta('echo hi', '9', 9), `${meta('9', 9)}\necho hi`);
assert.strictEqual(TaskManager.withTaskMeta('#!/bin/sh\nls', '9', 9), `#!/bin/sh\n${meta('9', 9)}\nls`);
assert.strictEqual(TaskManager.withTaskMeta(`${hashMeta(1, 1)}\necho hi`, '1', 2), `${meta('1', 2)}\necho hi`);
console.log('✅ 解析/剥离/盖章');

// ---------- onetime 规范化 ----------
// 新任务赋 id=now
let out = TaskManager.normalizeOnetimeTasks(['echo hi'], []);
assert.strictEqual(out.length, 1);
assert.strictEqual(TaskManager.stripTaskMetaLine(out[0]), 'echo hi');
assert.strictEqual(TaskManager.parseTaskMeta(out[0]).updated, Number(TaskManager.parseTaskMeta(out[0]).id));
// 内容未变: 幂等保留存量 id/updated (入参带旧 updated 不推进; 输出行被规范化为本端语法)
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(7, 1)}\necho hi`], [`${hashMeta(7, 9)}\necho hi`]);
assert.deepStrictEqual(out, [`${meta(7, 9)}\necho hi`]);
// 内容变化: 保留 id, updated 刷新
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(7, 3)}\necho new`], [`${hashMeta(7, 3)}\necho old`]);
assert.strictEqual(TaskManager.parseTaskMeta(out[0]).id, '7');
assert.ok(TaskManager.parseTaskMeta(out[0]).updated > 3);
assert.strictEqual(TaskManager.stripTaskMetaLine(out[0]), 'echo new');
// id 跨位置匹配
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(2, 2)}\nb`, `${hashMeta(1, 1)}\na`], [`${hashMeta(1, 1)}\na`, `${hashMeta(2, 2)}\nb`]);
assert.strictEqual(TaskManager.parseTaskMeta(out[0]).id, '2');
assert.strictEqual(TaskManager.parseTaskMeta(out[1]).id, '1');
// 裸入参保存量 id
out = TaskManager.normalizeOnetimeTasks(['echo hi'], [`${hashMeta(7, 3)}\necho hi`]);
assert.deepStrictEqual(out, [`${meta(7, 3)}\necho hi`]);
// 存量无行 (旧版遗留): 采纳入参 id
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(42, 99)}\necho hi`], ['echo hi']);
assert.deepStrictEqual(out, [`${meta(42, 99)}\necho hi`]);
// 未入参条目删除
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(1, 1)}\na`], [`${hashMeta(1, 1)}\na`, `${hashMeta(2, 2)}\nb`]);
assert.strictEqual(out.length, 1);
assert.strictEqual(TaskManager.parseTaskMeta(out[0]).id, '1');
// 不同 id 同内容: 整表两条都保留, 存量已有的保原 id
out = TaskManager.normalizeOnetimeTasks([`${hashMeta(1, 1)}\nx`, `${hashMeta(2, 2)}\nx`], [`${hashMeta(2, 2)}\nx`]);
assert.strictEqual(out.length, 2);
assert.ok([TaskManager.parseTaskMeta(out[0]).id, TaskManager.parseTaskMeta(out[1]).id].includes('2'));
console.log('✅ onetime 规范化');

// ---------- cron 规范化 ----------
out = TaskManager.normalizeCronTasks({ '*/5 * * * *': 'echo hi' }, {});
assert.strictEqual(TaskManager.stripTaskMetaLine(out['*/5 * * * *']), 'echo hi');
assert.ok(TaskManager.parseTaskMeta(out['*/5 * * * *']));
// id 跨表达式: 同一条任务改调度时间 → 表达式随入参、id 保留、updated 刷新
out = TaskManager.normalizeCronTasks({ '0 9 * * *': `${hashMeta(7, 3)}\nwork` }, { '0 8 * * *': `${hashMeta(7, 3)}\nwork` });
assert.deepStrictEqual(Object.keys(out), ['0 9 * * *']);
assert.strictEqual(TaskManager.parseTaskMeta(out['0 9 * * *']).id, '7');
assert.ok(TaskManager.parseTaskMeta(out['0 9 * * *']).updated > 3);
// 内容变化保 id
out = TaskManager.normalizeCronTasks({ '0 8 * * *': `${hashMeta(7, 3)}\nnew` }, { '0 8 * * *': `${hashMeta(7, 3)}\nold` });
assert.strictEqual(TaskManager.parseTaskMeta(out['0 8 * * *']).id, '7');
assert.strictEqual(TaskManager.stripTaskMetaLine(out['0 8 * * *']), 'new');
// 裸入参保存量 id
out = TaskManager.normalizeCronTasks({ '0 8 * * *': 'a' }, { '0 8 * * *': `${hashMeta(7, 3)}\na` });
assert.deepStrictEqual(out, { '0 8 * * *': `${meta(7, 3)}\na` });
// 未入参表达式删除
out = TaskManager.normalizeCronTasks({ '0 8 * * *': `${hashMeta(1, 1)}\na` }, { '0 8 * * *': `${hashMeta(1, 1)}\na`, '0 9 * * *': `${hashMeta(2, 2)}\nb` });
assert.deepStrictEqual(Object.keys(out), ['0 8 * * *']);
// 空入参清空
assert.deepStrictEqual(TaskManager.normalizeCronTasks({}, { '0 8 * * *': 'a' }), {});
console.log('✅ cron 规范化');

// ---------- setter 端到端 ----------
const savedOt = Config.onetasks;
const savedCt = Config.crontasks;
const savedLoop = Config.cronloop;
Config.onetasks = [];
Config.crontasks = {};
try {
  TaskManager.setOnetimeTasks(['echo hi']);
  assert.strictEqual(Config.onetasks.length, 1);
  assert.ok(TaskManager.parseTaskMeta(Config.onetasks[0]));
  const first = [...Config.onetasks];
  TaskManager.setOnetimeTasks(first); // 同内容重推: 幂等
  assert.deepStrictEqual(Config.onetasks, first);

  Config.crontasks = {};
  TaskManager.setCronTasks({ '0 8 * * *': 'work' });
  const cronFirst = { ...Config.crontasks };
  const cronId = TaskManager.parseTaskMeta(cronFirst['0 8 * * *']).id;
  TaskManager.setCronTasks({ '0 9 * * *': cronFirst['0 8 * * *'] }); // 改调度时间: id 不变
  assert.deepStrictEqual(Object.keys(Config.crontasks), ['0 9 * * *']);
  assert.strictEqual(TaskManager.parseTaskMeta(Config.crontasks['0 9 * * *']).id, cronId);
  console.log('✅ setter 端到端');
} finally {
  Config.onetasks = savedOt;
  Config.crontasks = savedCt;
  Config.cronloop = savedLoop;
  TaskManager.cronJobs?.forEach(job => { try { job.stop?.(); job.destroy?.(); } catch { /* noop */ } });
  TaskManager.cronJobs?.clear();
}

console.log('🎉 全部通过');
