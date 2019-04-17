const { physicians, appointmentList } = require('./data.js');

const getPhysicians = (cb) => {
  cb(null, physicians);
};

const getAppointments = (physician, cb) => {
  const appointments = appointmentList[physician];
  cb(null, appointments);
};

module.exports = { getPhysicians, getAppointments };