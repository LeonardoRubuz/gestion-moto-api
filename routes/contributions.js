const express =  require('express');
const { 
    getContributions,
    addContribution,
    getContribution,
    updateContribution,
    deleteContribution
 } = require('../controllers/contributions');
const router = express.Router()

router.route("/")
.get(getContributions)
.post(addContribution)

router.route("/:id")
.get(getContribution)
.put(updateContribution)
.delete(deleteContribution)

module.exports = router;
