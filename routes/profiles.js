const express =  require('express');
const { 
    getUserProfiles,
    addUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
 } = require('../controllers/users');
const router = express.Router()


router.route("/")
.get(getUserProfiles)
.post(addUserProfile)

router.route("/:id")
.get(getUserProfile)
.put(updateUserProfile)
.delete(deleteUserProfile)

module.exports = router;