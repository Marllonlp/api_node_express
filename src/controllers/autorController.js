import { autor } from "../model/Autor.js";

class AutorController {
    
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const autorEncontrado = await autor.findById(req.params.id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso",
                autor: novoAutor
            });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json("Autor atualizado!");
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async deletarAutor(req, res) {
        try {
            await autor.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Autor deletado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar` });
        }
    }
}

export default AutorController;