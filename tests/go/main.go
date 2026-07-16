package main

import (
    "fmt"
    "os"
    "time"

    kisama "github.com/liveqte/kisama_agent/go/kisama"
)

func main() {
    ecdsaPub := os.Getenv("ECDSA_PUBKEY")
    eciesPub := os.Getenv("ECIES_PUBKEY")
    if ecdsaPub == "" || eciesPub == "" {
        ecdsaPub = "Ai3VxtqO20kkcuP7Ba28fULmQo46Ef1LrGixu+GiorL5"
        eciesPub = "A1pf0NNQQYeYc9RLrExjLpY6WNn/T/D63TOh3CDrHxpD"
    }

    host := os.Getenv("HOST")
    if host == "" {
        host = "127.0.0.1"
    }

    port := os.Getenv("PORT")
    if port == "" {
        port = "8000"
    }

    svc, err := kisama.NewService(kisama.Options{
        Host:              host,
        Port:              8000,
        KPort:             8000,
        Debug:             true,
        ECDSAPublicKey:    ecdsaPub,
        ECIESPublicKeyB64: eciesPub,
    })
    if err != nil {
        panic(err)
    }

    fmt.Println("starting service", svc.Addr())
    if err := svc.Start(); err != nil {
        panic(err)
    }
    defer svc.Stop()

    time.Sleep(2 * time.Second)
    fmt.Println("service started successfully")
}
