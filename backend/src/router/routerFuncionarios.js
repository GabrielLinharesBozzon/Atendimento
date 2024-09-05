import express from "express";

const funcionarios = express();

funcionarios.get("/", (req, res) => {
  res.status(200).send("<h1>Olá funcionarios</h1>");
  console.log("Recebimento do terminal funcionarios", new Date());
});

funcionarios.post("/", (req, res) => {
  res.status(201).send("Envio do POST");
  console.log("Envio do terminal");
});

funcionarios.put("/", (req, res) => {
  res.status(202).send("Atualização");
  console.log("Foi feita a atualização");
});

funcionarios.delete("/", (req, res) => {
  res.status(203).send("Deletado");
  console.log("Foi feita a exclusão");
});

export default funcionarios;
