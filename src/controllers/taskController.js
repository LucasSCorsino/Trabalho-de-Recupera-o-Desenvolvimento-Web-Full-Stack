// Armazenamento em memória: um array simples para guardar as tarefas.
// Em uma aplicação real, isso seria um banco de dados.
let tasks = [];
let nextId = 1; // Um contador simples para gerar IDs únicos

// Controller para CRIAR uma nova tarefa (POST)
export function createTask(req, res) {
  const { title, description } = req.body;

  // Validação simples: verifica se o título foi enviado
  if (!title) {
    return res.status(400).json({ error: 'O campo "title" é obrigatório.' });
  }

  // Cria o novo objeto de tarefa
  const newTask = {
    id: nextId++,
    title,
    description: description || '', // Se a descrição não for enviada, fica como string vazia
    completed: false,
    createdAt: new Date().toISOString()
  };

  // Adiciona a nova tarefa ao array
  tasks.push(newTask);

  // Retorna a tarefa criada com o status 201 (Created)
  res.status(201).json(newTask);
}

// Controller para LISTAR todas as tarefas (GET)
export function getAllTasks(req, res) {
  // Simplesmente retorna o array completo de tarefas
  res.json(tasks);
}

// Controller para ATUALIZAR uma tarefa (PUT)
export function updateTask(req, res) {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  // Procura a tarefa no array pelo ID
  const task = tasks.find(t => t.id === parseInt(id));

  // Se não encontrar, retorna um erro 404 (Not Found)
  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  // Atualiza os campos da tarefa, se eles foram enviados na requisição
  if (title) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  // Retorna a tarefa atualizada
  res.json(task);
}

// Controller para DELETAR uma tarefa (DELETE)
export function deleteTask(req, res) {
  const { id } = req.params;

  // Encontra o índice da tarefa no array
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  // Se o índice for -1, significa que a tarefa não foi encontrada
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  // Remove a tarefa do array usando o índice encontrado
  tasks.splice(taskIndex, 1);

  // Retorna uma resposta de sucesso sem conteúdo (status 204)
  res.status(204).send();
}