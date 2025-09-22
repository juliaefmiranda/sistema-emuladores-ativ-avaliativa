import dados from "../models/dados.js";
const { emuladores } = dados;

const getAllEmuladores = (req, res) => {
    let resultado = emuladores;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
}


export { getAllEmuladores }