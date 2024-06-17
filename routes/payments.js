const express =  require('express');
const { 
    addPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment
 } = require('../controllers/payments');
const router = express.Router()

router.get("/")
.get(getPayments)
.post(addPayment)

router.route("/:id")
.get(getPayment)
.put(updatePayment)
.delete(deletePayment)

module.exports = router;