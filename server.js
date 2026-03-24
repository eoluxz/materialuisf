//importação a partir de commonJS:
//var express = require("express");

import express from "express";

const app = express();
const porta = 3000;

app.get("/", (request, response) => {
    response.send("Olá mundo!");
});

app.get("/usuario", (request, response) => {
    response.json({
        id: 1,
        nome: "Lucca Machado",
        profissao: "coletador de galinha"

    });
});


app.get("/usuarios", (request, response) => {
    response.json([
        {
            id: 1,
            nome: "Livia",
            profissao: "biomedica"
        },
        {
            id: 2,
            nome: "Mark",
            profissao: "Dono de cabaré"

        },
        {
            id: 3,
            nome: "Pedro",
            profissao: "Streamer"

        }
    ]);
});

app.listen(porta, (request, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
});