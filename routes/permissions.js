const express =  require('express');
const { 
    getPermissions,
    addPermission,
    getPermission,
    updatePermission,
    deletePermission
 } = require('../controllers/permissions');
const router = express.Router()

router.get("/")
.get(getPermissions)
.post(addPermission)

router.route("/:id")
.get(getPermission)
.put(updatePermission)
.delete(deletePermission)

module.exports = router;