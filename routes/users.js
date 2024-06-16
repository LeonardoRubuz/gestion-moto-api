const express =  require('express');
const router = express.Router()

router.route("/")
.get()
.post()

router.route("/:id")
.get()
.put()
.delete()

router.route("/profiles")
.get()
.post()

router.route("/profiles/:id")
.get()
.put()
.delete()

module.exports = router;