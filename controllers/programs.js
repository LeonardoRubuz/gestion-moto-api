const { createProgram, retrievePrograms, retrieveProgram, changeProgram, removeProgram } = require("../database/requests");


const addProgram = async (req, res) => {
    if (!await createProgram(req.body)) {
        res.status(500).send('Fail to create program')
    }else {
        res.status(201).send("Program created with success")
    }
}


const getPrograms = async (req, res) => {
    let programs;
    if (req.query) {
        programs =  await retrievePrograms(req.query);
    } else {
        programs =  await retrievePrograms();
    }
    res.status(200).json(programs);
}


const getProgram = async (req, res) => {
    const program = await retrieveProgram(req.params.id)
    res.status(200).json(program)
}

const updateProgram = async (req, res) => {
    if (!await changeProgram(req.params.id, req.body)) {
        res.status(500).send("Cannot update the program")
    }
    res.status(200).send("Program updated")
}

const deleteProgram = async (req, res) => {
    if (!await removeProgram(req.params.id)) {
        res.status(500).send("Cannot delete the program")
    }
    res.status(200).send("Program deleted")
}

module.exports = {
    addProgram,
    getPrograms,
    getProgram,
    updateProgram,
    deleteProgram
};
