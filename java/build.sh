#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [ ! -f pom.xml ]; then
  echo "ERROR: pom.xml not found in $(pwd)"
  exit 1
fi
mvn -q -DskipTests package
echo "Built: target/kisama-agent-java-0.1.0-jar-with-dependencies.jar"
