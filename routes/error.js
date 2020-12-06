const { Router } = require('express')
const router = Router()
const { error } = require('../controllers/error')

router.get('/error', error)


module.exports = router