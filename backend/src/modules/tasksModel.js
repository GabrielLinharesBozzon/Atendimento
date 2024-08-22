import connection from './connection.js'; // Certifique-se de adicionar a extensão .js

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

export default {
  getAll
};
