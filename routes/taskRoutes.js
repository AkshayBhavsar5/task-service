import express from 'express';
import {
  getTasks,
  createTask,
  updateTaskStatus,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/getAllTask', getTasks);
router.post('/create-task', createTask);
router.patch('/:id', updateTaskStatus);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
