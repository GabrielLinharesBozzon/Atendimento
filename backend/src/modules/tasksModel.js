import connection from './connection.js'; 

const getAll = async (req,res) => {
  const [tasks] = await connection.execute('SELECT * FROM TASKS');
  console.log('Acesso ao banco de dados com sucesso',new Date().toLocaleTimeString());
  return tasks[0];
};
const createTask= async (tasks)=>{
  const{title}= task;
  const query = 'INSERT INOT TASK (TITLE,STATUS,CREATED_AT)VALUES(?,?,?)';
  const dateUTC = new Date(Date.now()).toUTCString(); 
  const createdtask = await connection.execute(query,[title,'pendete',dateUTC]);
  return createTask;
};

export default {
  getAll,
  createTask,
};