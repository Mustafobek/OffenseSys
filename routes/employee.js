const { Router } = require('express')
const router = Router()
const { getEmployee, postEmployee } = require('../controllers/employee') 

router.get('/employees/:worker', getEmployee)
router.post('/employees/:worker', postEmployee)

module.exports = router