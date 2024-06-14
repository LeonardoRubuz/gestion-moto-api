const { 
    createPermission,
    retrievePermissions,
    retrievePermission,
    changePermission,
    removePermission
 } = require("../database/requests")

const addPermission = async (req, res) => {
    if (!await createPermission(req.body)) {
        res.status(500).send("Cannot create permission")
    } else {
        res.status(201).send("Permission created")
    }
}


const getPermissions = async (req, res) => {
    const perms = await retrievePermissions()
    res.status(200).json(perms)
}

const getPermission = async (req, res) => {
    const perm = await retrievePermission(req.params.id)
    res.status(200).json(perm)
}

const updatePermission = async (req, res) => {
    if (!await changePermission(req.params.id)) {
        res.status(500).send("Cannot update permission")
    } else {
        res.status(200).send("Permission updated")
    }
}

const deletePermission = async (req, res) => {
    if (!await removePermission(req.params.id)) {
        res.status(500).send("Cannot delete permission")
    } else {
        res.status().send("Permission deleted")
    }
}

module.exports = {
    addPermission,
    getPermissions,
    getPermission,
    updatePermission,
    deletePermission
};
