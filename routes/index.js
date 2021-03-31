var express = require('express');
const { findByIdAndUpdate } = require('../models/doctor');
var router = express.Router();
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

/* GET home page. */
router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  })
  .get('/doctors', async(req, res) => {
    const doctors = await Doctor.find()
    res.render('doctors/index', { doctors: doctors })
  })
// Create data to base
  .get('/doctors/create', (req, res) => {
    res.render('doctors/create')
  })
  .post('/doctors', async (req, res) => {
    try {
      const doctor = new Doctor(req.body)
      await doctor.save()
      res.redirect('/doctors')
    } catch (error) {
      res.render('doctors/create', {
        ...req.body,
        error: error.message
      })
    }
    })
  // Update Doctor Records in base
    .get('/doctors/:id', async (req, res) => {
      const doctor = await Doctor.findById(req.params.id)

      res.render('doctors/update', doctor)
  })
    .post('/doctors/:id', async (req, res) => {
      try {
        await Doctor.findByIdAndUpdate(req.params.id, req.body)

        res.redirect('/doctors')
      } catch (error) {
        res.render('doctors/update', {
          ...req.body,
          error: error.message
        })
      }
    })

// Get Home page for patients
  .get('/patients', async(req, res) => {
    const patients = await Patient.find()
    res.render('patients/index', { patients: patients })
  })
// Create Records to collection patients
  .get('/patients/create', (req, res) => {
    res.render('patients/create')
  })
    .post('/patients', async (req, res) => {
      try {
        const patient = new Patient(req.body)
        await patient.save()
        res.redirect('/patients')
      } catch (error) {
        res.render('patients/create', {
          ...req.body,
          error: error.message
        })
      }
      })
  // Update Patients Records in Base    
  .get('/patients/:id', async (req, res) => {
    const patient = await Patient.findById(req.params.id)

    res.render('patients/update', patient)
  })
  .post('/patients/:id', async (req, res) => {
    try {
      await Patient.findByIdAndUpdate(req.params.id, req.body)

      res.redirect('/patients')
    } catch (error) {
      res.render('patients/update', {
        ...req.body,
        error: error.message
      })
    }
  })

// Delete Routes...
//Doctors
  .delete('/doctors/:id', async(req, res) => {
    await Doctor.findByIdAndRemove(req.params.id)
    res.send({
      error: false,
      message: `Doctor with id ${req.params.id} removed`
    })
  })
//Patient
.delete('/patients/:id', async(req, res) =>{
  await Patient.findByIdAndRemove(req.params.id)
  res.send({
    error:false,
    message: `Patient with id ${req.params.id} removed`
  })
})


    
module.exports = router;
