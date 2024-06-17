const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router
.post("/login", authMiddleware)

module.exports = router;