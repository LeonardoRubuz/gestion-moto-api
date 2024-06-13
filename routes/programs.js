const express =  require('express');
const { addProgram, getPrograms, getProgram, updateProgram, deleteProgram } = require('../controllers/programs');
const router = express.Router()

router.route("/")
.get(getPrograms)
.post(addProgram)

router.route("/:id")
.get(getProgram)
.put(updateProgram)
.delete(deleteProgram)

module.exports = router;