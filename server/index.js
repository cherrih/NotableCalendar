const express = require('express');
const app = express();
const port = 3002;

const { getPhysicians, getAppointments } = require('../database/index.js');

app.use(express.static('public'));

app.get('/api/physicians', (req, res) => {
  getPhysicians((err, physicians) => {
    if (err) res.status(500).send('error requesting physicians');
    else res.send(physicians);
  });
});

app.get('/api/appointments/:physician', (req, res) => {
  const physician = req.params.physician;
  getAppointments(physician, (err, appointments) => {
    if (err) res.status(500).send('error requesting appointments');
    else res.send(appointments);
  })
})

app.listen(port, () => console.log('listening on: ', port));