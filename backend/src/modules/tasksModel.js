import connection from './connection.js'; 

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  console.log('Acesso ao banco de dados com sucesso',new Date().toLocaleTimeString());
  return tasks;
};

export default {
  getAll
};