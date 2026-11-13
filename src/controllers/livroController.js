import livro from "../model/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async cadastrarLivros(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json(
                {
                    message: "Criado com sucesso",
                    livro: novoLivro
                });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json("Livro atualizado!");
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async deletarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro deletado" })
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao deletar` });
        }
    }
};


export default LivroController;
