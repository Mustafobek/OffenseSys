const errorhandler = require('../utils/errorHandler')
const Employee = require('../models/Employee')
const Offense = require('../models/Offense')


module.exports.getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({})
        const offenses = await Offense.find({
            employee: req.body.id
        })

        console.log(offenses)

        employees.map(employee => {
            const fullname = (employee.name + employee.surname + employee.fathername).replace(/\s/g, '')

            if (req.params.worker === fullname) {
                console.log('ok')
                res.render('post', {
                    employee: employee,
                    offenses: offenses,
                    fullname: fullname
                })
            } else {
                console.log('smth wrong')
            }
        })
    } catch (e) {
        errorhandler(res, e)
    }
}

module.exports.postEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            _id: req.body.id,
        })
        console.log(employee.name)
        console.log(req.params.worker)

        const newoffense = new Offense({
            title: req.body.title,
            description: req.body.description,
            employee: employee
        })
        console.log(newoffense)


        const fullname = employee.name + employee.surname + employee.fathername
        if (req.params.worker === fullname) {
            console.log(fullname)
            console.log('ok')
            await newoffense.save()
            res.redirect('/employees/:worker', res.status(201), {
                fullname: fullname.replace(/\s/g, '')
            })
        } else {
            console.log('smth went wrong')
        }
    } catch (e) {
        errorhandler(res, e)
    }
}
