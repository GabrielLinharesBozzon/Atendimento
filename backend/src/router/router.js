import express from "express";
import cliente from "./clientes.js";
import funcionarios from "./routerFuncionarios.js";
import taskRoutes from '../router/routerTasks.js'; // Importar as rotas de tarefas
import cors  from "cors";

const app = express();
app.use(express.json()); // Para habilitar o envio de JSON nas requisições
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Olá mundo!!!</h1>");
  console.log("Recebimento do terminal", new Date());
});//Rota principal 

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

// Rotas para tasks, clientes e funcionários
app.use('/tasks', taskRoutes); // Usar as rotas de tarefas
app.use("/clientes", cliente);
app.use("/funcionarios", funcionarios);

export default app;

