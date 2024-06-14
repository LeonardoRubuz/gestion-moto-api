const { 
    createAssociation, 
    retrieveAssociations, 
    retrieveAssociation, 
    changeAssociation, 
    removeAssociation, 
    createAssociationBranch, 
    retrieveAssociationBranches, 
    retrieveAssociationBranch, 
    changeAssociationBranch, 
    removeAssociationBranch, 
    createAssociationNotif, 
    retrieveAssociationNotifs, 
    retrieveAssociationNotif, 
    changeAssociationNotif, 
    removeAssociationNotif } = require("../database/requests")


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


// Branches related functions

const addAssociationBranch = async (req, res) => {
    if (!await createAssociationBranch(req.params.id, req.body)) {
        res.status(500).send('Fail to add a branch')
    }else {
        res.status(201).send('Branch added')
    }
}

const getAssociationBranches = async (req, res) => {
    const branches = await retrieveAssociationBranches(req.params.id)
    res.status(200).json(branches)
}

const getAssociationBranch = async (req, res) => {
    const branch = await retrieveAssociationBranch(
        req.params.id,
        req.params.branch_id
    )
    res.status(200).json(branch)
}

const updateAssociationBranch = async (req, res) => {
    if (!await changeAssociationBranch(
        req.params.id,
        req.params.branch_id,
        req.body    
        )) {
        res.status(500).send("Cannot update the branch")
    }else{
        res.status(200).send("Branch updated")
    }
}

const deleteAssociationBranch = async (req, res) => {
    if (!await removeAssociationBranch(req.params.id, req.params.branch_id)) {
        res.status(500).send('Cannot delete branch')
    } else {
        res.status(200).send("Branch deleted")
    }
}


// Notifications related functions
const addAssociationNotif = async (req, res) => {
    if (!await createAssociationNotif(req.params.id, req.body)) {
        res.status(500).send("Cannot create the message")
    } else {
        res.status(201).send("Message created")
    }
}

const getAssociationNotifs = async (req, res) => {
    const notifs = retrieveAssociationNotifs(req.params.id)
    res.status(200).json(notifs)
}

const getAssociationNotif = async (req, res) => {
    const notif = await retrieveAssociationNotif(
        req.params.id,
        req.params.notif_id)
    res.status(200).json(notif)
}

const updateAssociationNotif = async (req, res) => {
    if (!await changeAssociationNotif(
        req.params.id, 
        req.params.notif_id,
        req.body
    )) {
        res.status(500).send("Cannot update message")
    } else {
        res.status(200).send("Message updated")
    }
}

const deleteAssociationNotif = async (req, res) => {
    if (!await removeAssociationNotif(
        req.params.id, 
        req.params.notif_id
    )) {
        res.status(500).send("Cannot delete message")
    } else {
        res.status(200).send("Message deleted")
    }
}



module.exports = {
    addAssociation,
    getAssociations,
    getAssociation,
    updateAssociation,
    deleteAssociation,

    addAssociationBranch,
    getAssociationBranches,
    getAssociationBranch,
    updateAssociationBranch,
    deleteAssociationBranch,

    addAssociationNotif,
    getAssociationNotifs,
    getAssociationNotif,
    updateAssociationNotif,
    deleteAssociationNotif
};
