import dados from "../models/dados.js";
const { emuladores } = dados;

const getAllEmuladores = (req, res) => {
    let resultado = emuladores; 

    //Filtros

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
}

const getEmuladoresById = (req, res) => {
    const id = parseInt(req.params.id);

    const emulador = emuladores.find(e => e.id === id);

    if (!emulador) {
        res.status(400).json({
            success: false,
            message: `Emulador com id ${id} não encontrado!`
        });
    }

    res.status(200).json({
        total: emulador.length,
        data: emulador
    });
}

export { getAllEmuladores, getEmuladoresById }