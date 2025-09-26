// Importa o framework Express
import express from 'express';
// Importa as rotas da nossa aplicação
import routes from './routes.js';

// Cria uma instância do Express
const app = express();

// Middleware obrigatório para o Express entender JSON vindo no corpo das requisições
app.use(express.json());

// Diz ao Express para usar as rotas definidas no arquivo routes.js com o prefixo /api
app.use('/api', routes);

// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Inicia o servidor e fica "escutando" por requisições na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});