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

const createEmulador = (req, res) => {
    const { nome, console, versao, plataforma, jogos, desenvolvedor, opensource, status } = req.body;

    const statusEmulador = [ "Desenvolvimento","Beta", "Estável", "Abandonado"]

    //Regras de negócio

    if(!statusEmulador.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `Status inválido! Status permitidos: ${statusEmulador.join(", ")}.`
        });
    }

    if (jogos.length < 10) {
        return res.status(400).json({
            success: false,
            message: `O emulador deve suportar no mínimo 10 jogos!`
        });
    }

    //Criar novo emulador
    const novoEmulador = {
        id: emuladores.length + 1,
        nome,
        console,
        versao,
        plataforma,
        jogos,
        desenvolvedor,
        opensource,
        status,
    }

    emuladores.push(novoEmulador);

    res.status(200).json({
        success: true,
        message: `Novo Emulador adicionado com sucesso!`
    });
}

const updateEmulador =  (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, console, versao, plataforma, jogos, desenvolvedor, opensource, status } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: `O id deve ser um número válido!`
        });
    }

    const emuladorExiste = emuladores.find(e => e.id === id);

    if (!emuladorExiste) {
        return res.status(404).json({
            success: false,
            message: `Emulador não existe!`
        });
    }

    //Regras de negócio

    const emuladorAtualizados = emuladores.map( emulador => emulador.id === id 
        ? {
            ...emulador,
            ...(nome && { nome }),
            ...(console && { console }),
            ...(versao && { versao }),
            ...(plataforma && { plataforma }),
            ...(jogos && { jogos }),
            ...(desenvolvedor && { desenvolvedor }),
            ...(opensource && { opensource }),
            ...(status && { status }),
        }
        : emulador
    );

    emuladores.splice(0, emuladores.length, ...emuladorAtualizados);

    const emuladorAtualizado = emuladores.find(e => e.id === id);

    res.status(200).json({
        success: true,
        message: `Emulador atualizado com sucesso!`,
        emulador: emuladorAtualizado
    });

}

const deleteEmulador = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: `O id deve ser válido!`
        });
    }

    const idParaApagar = parseInt(id);

    const emuladorParaRemover = emuladores.find(e => e.id === idParaApagar);
    console.log(emuladorParaRemover)

    if (!emuladorParaRemover) {
        return res.status(404).json({
            success: false,
            message: `O emulador com esse id não existe!`
        });
    }

    const emuladorFiltrado = emuladores.filter(e => e.id !== id);
    console.log(emuladorFiltrado)

    emuladores.splice(0, emuladores.length, ...emuladorFiltrado);

    return res.status(200).json({
        success: true,
        message: `O emulador com o id ${id} foi removido com sucesso!`
    })
}

export { getAllEmuladores, getEmuladoresById, createEmulador, updateEmulador, deleteEmulador }