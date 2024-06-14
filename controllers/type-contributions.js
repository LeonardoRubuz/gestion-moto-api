const { 
    createContributionType,
    retrieveContributionTypes,
    removeContributionType,
    changeContributionType
 } = require("../database/requests")


const addContributionType = async (req, res) => {
    if (!await createContributionType(req.body)) {
        res.status(500).send("Cannot add type")
    } else {
        res.status(201).send("Type added")
    }
}
const getContributionTypes = async (req, res) => {
    const types = await retrieveContributionTypes()
    res.status(200).json(types)
}
const getContributionType = async (req, res) => {
    const type = await removeContributionType(req.params.id)
    res.status(200).json(type)
}
const updateContributionType = async (req, res) => {
    if (!await changeContributionType(req.params.id, req.body)) {
        res.status(500).send("Cannot update type")
    } else {
        res.status(200).send("Type updated")
    }
}
const deleteContributionType = async (req, res) => {
    if (!await removeContributionType(req.params.id)) {
        res.status(500).send("Cannot delete type")
    } else {
        res.status(200).send("Type deleted")
    }
}


module.exports = {
    addContributionType,
    getContributionTypes,
    getContributionType,
    updateContributionType,
    deleteContributionType
};
