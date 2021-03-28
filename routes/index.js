var express = require('express');
var router = express.Router();
const Doctor = require('../models/doctor')

/* GET home page. */
router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  })
  .get('/doctors', async(req, res) => {
    const doctors = await Doctor.find()
    res.render('doctors/index', { doctors: doctors })
  })
  .get('/doctors/create', (req, res) => {
    res.render('doctors/create')
  })
  .post('/doctors', async (req, res) => {
    const doctor = new Doctor(req.body)
    await doctor.save()
    res.redirect('/doctors')
  })


module.exports = router;
