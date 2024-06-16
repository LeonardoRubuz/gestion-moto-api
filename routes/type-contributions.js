const express = require('express');
const { 
    getContributionTypes,
    addContributionType,
    getContributionType,
    updateContributionType,
    deleteContributionType
 } = require('../controllers/type-contributions');
const router = express.Router()

router.route("/")
.get(getContributionTypes)
.post(addContributionType)

router.route("/:id")
.get(getContributionType)
.put(updateContributionType)
.delete(deleteContributionType)

module.exports = router;