import connection from './connection.js'; 

// Busca todas as tarefas
const getAll = async () => { 
  const [tasks] = await connection.execute('SELECT * FROM TASKS');
  return tasks;
};

// Criação de uma nova tarefa
const createTask = async (task) => {
  const { title } = task;
  const query = 'INSERT INTO TASKS (TITLE, STATUS, CREATED_AT) VALUES (?, ?, ?)';
  
  // Formata a data para 'YYYY-MM-DD HH:MM:SS'
  const dateUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const [result] = await connection.execute(query, [title, 'pendente', dateUTC]);
  
  // Retorna o ID da tarefa criada e os dados da tarefa
  return { id: result.insertId, title, status: 'pendente', createdAt: dateUTC };
};

// Exclusão de uma tarefa
const deleteTask = async (id) => {
  const [result] = await connection.execute('DELETE FROM TASKS WHERE ID = ?', [id]);
  if (result.affectedRows === 0) {
    throw new Error('Task not found');
  }
  return { message: 'Task deleted successfully' };
};

// Atualização de uma tarefa
const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE TASKS SET TITLE = ?, STATUS = ? WHERE ID = ?';
  const [result] = await connection.execute(query, [title, status, id]);
  if (result.affectedRows === 0) {
    throw new Error('Task not found');
  }
  return { id, title, status };
};

// Busca uma tarefa por ID
const getTaskById = async (id) => {
  const [tasks] = await connection.execute('SELECT * FROM TASKS WHERE ID = ?', [id]);
  return tasks.length > 0 ? tasks[0] : null; // Retorna a tarefa se ela existir
};

export default {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  getTaskById, // Certifique-se de exportar a função
};
