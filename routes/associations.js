const express =  require('express');
const {
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
} = require('../controllers/associations');
const router = express.Router()




router.route("/")
.get(getAssociations)
.post(addAssociation)

router.route("/:id")
.get(getAssociation)
.put(updateAssociation)
.delete(deleteAssociation)

router.route("/:id/branches")
.get(getAssociationBranches)
.post(addAssociationBranch)


router.route("/:id/branches/:branch_id")
.get(getAssociationBranch)
.put(updateAssociationBranch)
.delete(deleteAssociationBranch)


router.route("/:id/notifications")
.get(getAssociationNotifs)
.post(addAssociationNotif)


router.route("/:id/notifications/:notif_id")
.get(getAssociationNotif)
.put(updateAssociationNotif)
.delete(deleteAssociationNotif)

module.exports = router;