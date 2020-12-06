const homePageContent = 'randomly generated page in home route'
const errorhandler = require('../utils/errorHandler')
const Employee = require('../models/Employee')
const Offense = require('../models/Offense')

module.exports.main = async (req, res) => {
    try {

        const employees = await Employee
                .find({})
                .sort({surname: 1})
                .sort({name: 1})
                .sort({fathername: 1})
        
        const offenses = await Offense
                .find({})
                .sort({date: -1})

        res.status(200).render('home', {
            homePageContent: homePageContent,
            employees: employees,
            offenses: offenses
        })
    } catch (e) {
        errorhandler(res, e)
    }
}
