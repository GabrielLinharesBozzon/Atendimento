import express from "express";

const cliente = express();

cliente.get("/", (req, res) => {
  res.status(200).send("<h1>Olá cliente</h1>");
  console.log("Recebimento do terminal cliente", new Date());
});

cliente.post("/", (req, res) => {
  res.status(201).send("Envio do POST");
  console.log("Envio do terminal");
});

cliente.put("/", (req, res) => {
  res.status(202).send("Atualização");
  console.log("Foi feita a atualização");
});

cliente.delete("/", (req, res) => {
  res.status(203).send("Deletado");
  console.log("Foi feita a exclusão");
});

export default cliente;
