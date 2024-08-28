import tasksModel from '../modules/tasksModel.js';

const getAll = async (req, res) => {
  
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};


export default {
  getAll
};