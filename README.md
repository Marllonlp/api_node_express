# API REST de Livraria

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon" />
</p>

API REST para gerenciar o catálogo de uma livraria: cadastro, consulta, edição e remoção de livros e autores.
Feita em Node.js com Express e MongoDB, com o código organizado em camadas (rotas, controllers e models).

## Funcionalidades

- **CRUD completo de livros**: listar, buscar por ID, cadastrar, atualizar e remover
- **CRUD completo de autores**, com as mesmas operações
- **Livro vinculado a um autor**: no cadastro você informa só o ID do autor, e a API busca e salva os dados dele junto com o livro
- **Busca de livros por editora** via query string (`/livros/busca?editora=...`)
- **Credenciais do banco fora do código**, carregadas de um arquivo `.env`

## Tecnologias

| Tecnologia | Para que serve no projeto |
| --- | --- |
| **Node.js** (ES Modules) | Ambiente de execução |
| **Express 4** | Servidor HTTP, rotas e leitura de JSON |
| **MongoDB** | Banco de dados NoSQL, usando MongoDB Atlas |
| **Mongoose 9** | Schemas, validação e consultas ao MongoDB |
| **dotenv** | Carrega as variáveis de ambiente do `.env` |
| **nodemon** | Reinicia o servidor a cada alteração durante o desenvolvimento |

## Como rodar localmente

**Pré-requisitos:** Node.js 20.19 ou superior (exigido pelo Mongoose 9) e um banco MongoDB, seja local ou um cluster gratuito no [MongoDB Atlas](https://www.mongodb.com/atlas).

```bash
# 1. Clone o repositório
git clone https://github.com/Marllonlp/api_node_express.git
cd api_node_express

# 2. Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
DB_MONGO=mongodb+srv://USUARIO:SENHA@CLUSTER.mongodb.net/livraria
```

> Se a senha tiver caracteres especiais (`@`, `#`, `/`), codifique-os em formato URL. Por exemplo, `@` vira `%40`.

```bash
# 3. Inicie o servidor
npm run dev
```

A API fica disponível em `http://localhost:3000`.

## Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/livros` | Lista todos os livros |
| GET | `/livros/busca?editora=NOME` | Lista os livros de uma editora |
| GET | `/livros/:id` | Busca um livro pelo ID |
| POST | `/livros` | Cadastra um livro |
| PUT | `/livros/:id` | Atualiza um livro |
| DELETE | `/livros/:id` | Remove um livro |
| GET | `/autores` | Lista todos os autores |
| GET | `/autores/:id` | Busca um autor pelo ID |
| POST | `/autores` | Cadastra um autor |
| PUT | `/autores/:id` | Atualiza um autor |
| DELETE | `/autores/:id` | Remove um autor |

<details>
<summary><strong>Exemplo: cadastrar um autor e um livro</strong></summary>

```bash
# Cadastra o autor
curl -X POST http://localhost:3000/autores \
  -H "Content-Type: application/json" \
  -d '{ "nome": "J. R. R. Tolkien", "nacionalidade": "britânica" }'

# Cadastra o livro, usando o _id retornado acima
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "O Hobbit",
    "editora": "HarperCollins",
    "preco": 40,
    "paginas": 310,
    "autor": "ID_DO_AUTOR"
  }'
```

Resposta `201 Created`:

```json
{
  "message": "Criado com sucesso",
  "livro": {
    "_id": "665f1d9a8a1b2c3d4e5f6790",
    "titulo": "O Hobbit",
    "editora": "HarperCollins",
    "preco": 40,
    "paginas": 310,
    "autor": {
      "_id": "665f1c2e8a1b2c3d4e5f6789",
      "nome": "J. R. R. Tolkien",
      "nacionalidade": "britânica"
    }
  }
}
```

</details>

## Estrutura

```
src/
├── config/        # Conexão com o MongoDB
├── controllers/   # Lógica de cada endpoint
├── model/         # Schemas do Mongoose (Livro, Autor)
├── routes/        # Definição das rotas
└── app.js         # Configuração do Express
server.js          # Ponto de entrada
```
