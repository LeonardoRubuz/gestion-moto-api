const { createAssociation, retrieveAssociations, retrieveAssociation, changeAssociation, removeAssociation } = require("../database/requests")


const addAssociation = async (req, res) => {
    if (!await createAssociation(req.body)) {
        res.status(500).send("Fail to create association")
    }else{
        res.status(201).send("Association created")
    }
}


const getAssociations = async (req, res) => {
    const associations = await retrieveAssociations()
    req.status(200).json(associations)
}


const getAssociation = async (req, res) => {
    const association = await retrieveAssociation(req.params.id)
    res.status(200).json(association)
}


const updateAssociation = async (req, res) => {
    if (!await changeAssociation(req.params.id, req.body)) {
        res.status(500).send("cannot update association")
    }else{
        res.status(200).send("Association updates")
    }
}


const deleteAssociation = async (req, res) => {
    if (!await removeAssociation(req.params.id)) {
        res.status(500).send('Cannot delete association')
    }
    res.status(200).send("Association deleted")
}


module.exports = {
    addAssociation,
    getAssociations,
    getAssociation,
    updateAssociation,
    deleteAssociation
};
