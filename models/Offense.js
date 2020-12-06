const { Schema, model } = require('mongoose')

const offenseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '-'
    },
    date: {
        type: Date,
        default: Date.now 
    },
    employee: {
        ref: 'employees',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('offenses', offenseSchema)