// const express = require('express')
// const router = express.Router()

// router.post('/create-book', async (req, res) => {
//     console.log(req.body)
// })
// module.exports = router



const express = require('express')
const Book = require('./book.model')
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller')
const verifyAdminToken = require('../middleware/verifiedAdminToken')
const router = express.Router()

router.post('/create-book', verifyAdminToken, postABook)

router.get('/', getAllBooks)
router.get('/:id', getSingleBook)
router.put('/edit/:id', verifyAdminToken, updateBook)
router.delete('/:id', verifyAdminToken, deleteABook)
module.exports = router