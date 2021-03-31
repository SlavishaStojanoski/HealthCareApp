//Fuction Delete for Doctor
function deleteDoctor(id) {
    fetch(`http://localhost:3000/doctors/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.error) {
        location.reload();
      }
    })
    .catch(err => {
      console.log('Error during process ', err);
    });
  }

//Fuction Delete for Patient
function deletePatient(id) {
    fetch(`http://localhost:3000/patients/${id}`, {
        method: 'DELETE'
    }).then(res => {
        if (!res.error) {
            location.reload()
        }
    }).catch(err => {
        console.log('Error during process ', err)
    })
}