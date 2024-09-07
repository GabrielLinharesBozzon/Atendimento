import express from 'express';
import taskController from '../controller/taskController.js';
import validateBody from '../middlewares/taskMiddleware.js';

const tasks = express.Router();

tasks.get('/', taskController.getAll);
tasks.post('/',validateBody.validateFieldStatus,taskController.createTask);
tasks.delete('/:id',taskController.deleteTask);
tasks.put('/:id',
    validateBody.validateFieldStatus,
    validateBody.validateTitle,
    taskController.updateTask);


export default tasks;

