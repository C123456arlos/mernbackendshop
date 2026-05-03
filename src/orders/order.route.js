// const express = require('express')
// const { createAOrder } = require('./order.controller')
// const router = express.Router()

// router.post('/', createAOrder)

// module.exports = router

const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

// create order endpoint
router.post("/", createAOrder);
router.get('/email/:email', getOrderByEmail)
module.exports = router;