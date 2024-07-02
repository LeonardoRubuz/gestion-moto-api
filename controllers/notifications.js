const {
    createNotification,
    retrieveNotifications,
    retrieveNotification,
    changeNotification,
    removeNotification
} = require("../database/requests")


const addNotification = async (req, res) => {
    if (!await createNotification(req.body)) {
        res.status(500).send("Cannot create notification");
    } else {
        res.status(201).send("Notification created")
    }
}

const getNotifications = async (req, res) => {
    let notifs;
    if (req.query) {
        notifs = await retrieveNotifications(req.query)
    } else {
        notifs = await retrieveNotifications()
    }
    res.status(200).json(notifs)
}

const getNotification = async (req, res) => {
    const notifs = await retrieveNotification(req.params.id)
    res.status(200).json(notifs)
}

const updateNotification = async (req, res) => {
    if (!await changeNotification(req.params.id)) {
        res.status(500).send("Cannot update notification")
    } else {
        res.status(200).send("Notification updated")
    }
}

const deleteNotification = async (req, res) => {
    if (!await removeNotification(req.params.id)) {
        res.status(500).send("Cannot delete notification")
    } else {
        res.status().send("Notification deleted")
    }
}

module.exports = {
    addNotification,
    getNotifications,
    getNotification,
    updateNotification,
    deleteNotification
};
