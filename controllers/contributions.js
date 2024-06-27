const { 
    createContribution,
    retrieveContributions,
    retrieveContribution,
    changeContribution,
    removeContribution
 } = require("../database/requests");


const addContribution = async (req, res) => {
    if (!await createContribution(req.body)) {
        res.status(500).send("Cannot create a contribution")
    } else {
        res.status(201).send("Contribution created")
    }
}

const getContributions = async (req, res) => {
    let contribs;
    if (req.query) {
        contribs = await retrieveContributions(req.body.association_id, req.query)
    } else {
        contribs = await retrieveContributions(req.body.association_id)
    }
    res.status(200).json(contribs);
}

const getContribution = async (req, res) => {
    const contrib = await retrieveContribution(req.params.id)
    res.status(200).json(contrib)
}

const updateContribution = async (req, res) => {
    if (!await changeContribution(req.params.id)) {
        res.status(500).send("Cannot update contribution")
    } else {
        res.status(200).send("Contribution updated")
    }
}

const deleteContribution = async (req, res) => {
    if (!await removeContribution(req.params.id)) {
        res.status(500).send("Cannot delete contribution")
    } else {
        res.status(200).send("Contribution deleted")
    }
}


module.exports = {
    addContribution,
    getContributions,
    getContribution,
    updateContribution,
    deleteContribution
};
