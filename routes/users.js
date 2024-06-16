const express =  require('express');
const { 
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    getUserProfiles,
    addUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
 } = require('../controllers/users');
const router = express.Router()

router.route("/")
.get(getUsers)
.post(addUser)

router.route("/:id")
.get(getUser)
.put(updateUser)
.delete(deleteUser)

router.route("/profiles")
.get(getUserProfiles)
.post(addUserProfile)

router.route("/profiles/:id")
.get(getUserProfile)
.put(updateUserProfile)
.delete(deleteUserProfile)

module.exports = router;