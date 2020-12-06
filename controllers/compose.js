const Employee = require('../models/Employee')
const Offense = require('../models/Offense')
const errorhandler = require('../utils/errorHandler')

module.exports.getComposeEmployee = (req, res) => {
    try {
        res.status(200).render('composeEmployee')
    } catch (e) {
        errorhandler(res, e)
    }
}


module.exports.postComposeEmployee = async (req, res) => {
    try {

        const employees = await Employee.find({})

        const newEmployee = new Employee({
            name: req.body.name,
            surname: req.body.surname,
            fathername: req.body.fathername,
            workfield: req.body.workfield
        })

        await newEmployee.save()

        console.log(employees)

        res.redirect('/', res.status(201), {
            employees: employees
        })
    } catch (e) {
        errorhandler(res, e)
    }
}

