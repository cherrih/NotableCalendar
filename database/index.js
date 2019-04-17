const { physicians, appointments } = require('./data.js');

const getPhysicians = (cb) => {
  cb(null, physicians);
};

const getAppointments = (cb) => {
  cb(null, appointments);
};

module.exports = { getPhysicians, getAppointments };