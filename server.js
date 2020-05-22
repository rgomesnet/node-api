const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Mapeando os models
requireDir('./src/models');

// Primeira rota
app.use("/api", require("./src/routes"));

app.listen(port);