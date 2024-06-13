const express =  require('express');
const { getAssociations, addAssociation, getAssociation, updateAssociation, deleteAssociation } = require('../controllers/associations');
const router = express.Router()

router.route("/")
.get(getAssociations)
.post(addAssociation)

router.route("/:id")
.get(getAssociation)
.put(updateAssociation)
.delete(deleteAssociation)

module.exports = router;