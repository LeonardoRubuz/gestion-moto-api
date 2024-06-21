const { 
    createUser,
    retrieveUsers,
    retrieveUser,
    changeUser,
    removeUser,
    createUserProfile,
    retrieveUserProfiles,
    retrieveUserProfile,
    changeUserProfile,
    removeUserProfile
 } = require("../database/requests")

const addUser = async (req, res) => {
    if (!await createUser(req.body)) {
        res.status(500).send("Cannot create user");
    } else {
        res.status(201).send("User added");
    }
}
const getUsers = async (req, res) => {
    let users;
    if (req.query.profile) {
        users = await retrieveUsers(req.query.profile, req.query);
    } else {
        users = await retrieveUsers()
    }
    res.status(200).json(users);
}
const getUser = async (req, res) => {
    const user = await retrieveUser(req.params.id);
    res.status(200).json(user);
}
const updateUser = async (req, res) => {
    if (!await changeUser(req.params.id, req.body)) {
        res.status(500).send("Cannot update user");        
    } else {
        res.status(200).send("User updated");
    }
}
const deleteUser = async (req, res) => {
    if (!await removeUser(req.params.id)) {
        res.status(500).send("Cannot update user");        
    } else {
        res.status(200).send("User updated");
    }
}

/**
 * Profile related functions
 */

const addUserProfile = async (req, res) => {
    if (!await createUserProfile(req.body)) {
        res.status(500).send("Cannot create user profile")
    } else {
        res.status(201).send("Profile added")
    }
}
const getUserProfiles = async (req, res) => {
    let profiles;
    if (req.query) {
        profiles = await retrieveUserProfiles(req.query);
    } else {
        profiles = await retrieveUserProfiles();   
    }
    res.status(200).json(profiles)
}
const getUserProfile = async (req, res) => {
    const profile = await retrieveUserProfile(req.params.id);
    res.status(200).json(profile)
}
const updateUserProfile = async (req, res) => {
    if (!await changeUserProfile(req.params.id, req.body)) {
        res.status(500).send("Cannot update profile")
    } else {
        res.status(200).send("Profile updated")
    }
}
const deleteUserProfile = async (req, res) => {
    if (!await removeUserProfile(req.params.id)) {
        res.status(500).send("Cannot delete profile")
    } else {
        res.status(200).send("Profile deleted")
    }
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    addUserProfile,
    getUserProfiles,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
};
