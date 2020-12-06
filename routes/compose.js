const { Router } = require('express')
const router = Router()
const { getComposeEmployee, postComposeEmployee } = require('../controllers/compose')

router.get('/compose-employee', getComposeEmployee)
router.post('/compose-employee', postComposeEmployee)


module.exports = router