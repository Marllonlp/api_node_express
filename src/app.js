import express from "express";
import connectNaDatabase from "./config/dbConect.js";
import routes from "./routes/index.js";

const conexao = await connectNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Consexão feita com sucesso")
})

const app = express();
routes(app);

export default app;

