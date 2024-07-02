const express = require('express');
const { 
    addNotification,
    getNotifications,
    getNotification,
    updateNotification,
    deleteNotification
 } = require('../controllers/notifications');
const router = express.Router();

router.route("/")
.get(getNotifications)
.post(addNotification)

router.route("/:id")
.get(getNotification)
.put(updateNotification)
.delete(deleteNotification)

module.exports = router;