const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    full_name: {
        type:String,
        require: ['Full name is a required field']
    },
    licence_number: {
        type:String,
        require: ['Licence number is a required field'],
        unique: true,
        validate: {
            validator: (value) => {
               return /^[A-Z]{3}-{1}[0-9]{10}$/.test(value)
            },
            message: props => `The licence number ${props.value} is invalid`
        }
    },
    city: {
        type: String,
        require: ['City is required field']
    },
    specialization: {
        type: String,
        require: ['Specialization is a required field']
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)