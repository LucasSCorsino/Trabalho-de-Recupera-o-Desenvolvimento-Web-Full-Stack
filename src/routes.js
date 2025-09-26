// Importa o Router do Express
import { Router } from 'express';

// Importa todas as funções do nosso controller de tarefas
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
} from './controllers/taskController.js';

// Cria uma instância do Router
const router = Router();

// Define as rotas da API de tarefas
router.post('/tarefas', createTask);        // Rota para criar uma nova tarefa
router.get('/tarefas', getAllTasks);         // Rota para listar todas as tarefas
router.put('/tarefas/:id', updateTask);      // Rota para atualizar uma tarefa pelo ID
router.delete('/tarefas/:id', deleteTask);   // Rota para deletar uma tarefa pelo ID

// Exporta o router para ser usado no server.js
export default router;