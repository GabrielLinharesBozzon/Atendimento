import express from "express";
import cliente from "./clientes.js";
import funcionarios from "./routerFuncionarios.js";
import tasksController from '../controller/controller.js';

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Olá mundo!!!</h1>");
  console.log("Recebimento do terminal", new Date());
});

app.post("/", (req, res) => {
  res.status(201).send("Envio do POST");
  console.log("Envio do terminal");
});

app.put("/", (req, res) => {
  res.status(202).send("Atualização");
  console.log("Foi feita a atualização");
});

app.delete("/", (req, res) => {
  res.status(203).send("Deletado");
  console.log("Foi feita a exclusão");
});
 app.use('/tasks',tasksController.getAll)
app.use("/clientes", cliente);
app.use("/funcionarios", funcionarios);

export default app;
