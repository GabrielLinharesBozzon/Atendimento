import tasksModel from '../modules/tasksModel.js';

// Busca todas as tarefas
const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

// Criação de uma nova tarefa
const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask); 
};

// Exclusão de uma tarefa
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const taskExists = await tasksModel.getTaskById(id);

  if (!taskExists) {
    return res.status(404).json({ message: 'Task not found' });
  }

  await tasksModel.deleteTask(id);
  return res.status(204).json(); // Sem conteúdo após exclusão
};

// Atualização de uma tarefa
const updateTask = async (req, res) => {
  const { id } = req.params;
  const taskExists = await tasksModel.getTaskById(id);

  if (!taskExists) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = await tasksModel.updateTask(id, req.body);
  return res.status(200).json(updatedTask); // Retorna a tarefa atualizada
};

export default {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
