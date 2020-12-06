const { Router } = require('express')
const router = Router()
const { main } = require('../controllers/home')

router.get('/', main)

module.exports = router