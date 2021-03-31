const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    patient_name: {
        type:String,
        required: ['Patient name is a required field']
    },
    patient_num: {
        type:String,
        required: ['Patient number is a required field'],
        unique: true,
        validate: {
            validator: (value) => {
               return /^[A-Z]{2}-{1}[0-9]{4}$/.test(value)
            },
            message: props => `The Patient number ${props.value} is invalid`
        }
    },
    patient_city: {
        type: String,
        required: ['City is required field']
    },
    diagnose: {
        type: String,
        required: ['Specialization is a required field']
    }
})

module.exports = mongoose.model('Patient', patientSchema)
