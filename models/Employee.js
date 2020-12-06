const { Schema, model } = require('mongoose')

const empolyeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    workfield: {
        type: String,
        required: true
    }
})

module.exports = model('employees', empolyeeSchema)