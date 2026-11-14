# 📚 API REST de Livraria

API REST para gerenciar o catálogo de uma livraria: cadastro, consulta, atualização e exclusão de **livros** e **autores**. Ao cadastrar um livro, basta informar o ID do autor, e a API busca os dados dele e os grava junto com o livro. Também é possível filtrar livros por editora.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)

---

## 🎯 Motivação

Este projeto foi feito para praticar a construção de APIs REST com Node.js, do jeito que se faz no back-end: rotas, regras de negócio e acesso a dados ficam em camadas separadas, há relacionamento entre entidades em um banco NoSQL e as credenciais ficam fora do código.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **Node.js** (ES Modules) | Ambiente de execução |
| **Express** | Servidor HTTP, rotas e leitura de JSON |
| **MongoDB** | Banco de dados (local ou MongoDB Atlas) |
| **Mongoose** | Schemas, validação e consultas ao banco |
| **dotenv** | Carrega variáveis de ambiente do arquivo `.env` |
| **nodemon** | Reinicia o servidor automaticamente durante o desenvolvimento |

---

## ✨ Funcionalidades principais

- **CRUD completo** de livros e autores
- **Livro ligado ao autor:** no cadastro do livro, informe só o ID do autor e a API completa os dados dele
- **Busca por editora:** filtro de livros por query string
- **Organização em camadas:** rotas, controllers e models separados
- **Credenciais protegidas:** a conexão com o banco é configurada por variável de ambiente, sem nada no código

---

## 📁 Estrutura do projeto

```
api_node_express/
├── src/
│   ├── config/        # Conexão com o MongoDB
│   ├── controllers/   # Lógica de cada endpoint
│   ├── model/         # Schemas Mongoose (Livro e Autor)
│   ├── routes/        # Definição das rotas
│   └── app.js         # Configuração do Express
├── server.js          # Ponto de entrada da aplicação
├── package.json
└── .gitignore
```

---

## 🔗 Endpoints

### Livros

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/busca?editora=NOME` | Busca livros por editora |
| `GET` | `/livros/:id` | Busca um livro pelo ID |
| `POST` | `/livros` | Cadastra um livro (com o ID do autor) |
| `PUT` | `/livros/:id` | Atualiza um livro |
| `DELETE` | `/livros/:id` | Remove um livro |

### Autores

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/autores` | Lista todos os autores |
| `GET` | `/autores/:id` | Busca um autor pelo ID |
| `POST` | `/autores` | Cadastra um autor |
| `PUT` | `/autores/:id` | Atualiza um autor |
| `DELETE` | `/autores/:id` | Remove um autor |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19 ou superior** (exigido pelo Mongoose 9)
- Um banco **MongoDB**, local ou no [MongoDB Atlas](https://www.mongodb.com/atlas)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Marllonlp/api_node_express.git
   cd api_node_express
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto:
   ```env
   DB_MONGO=sua_string_de_conexao_do_mongodb
   ```
   > ⚠️ Se a senha tiver caracteres especiais (`@`, `#`, `%` etc.), ela precisa estar codificada para URL (URL-encoded).

4. **Inicie o servidor**
   ```bash
   npm run dev
   ```

   A API ficará disponível em **http://localhost:3000**.

---

## 👤 Autor

**Marlon Neves**
[LinkedIn](https://www.linkedin.com/in/marlon-neves6/) · [GitHub](https://github.com/Marllonlp)
