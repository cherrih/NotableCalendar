import React from 'react';

const AppointmentsList = ({ appointments }) => {
  if (appointments) {
    console.log(appointments)
    const rows = appointments.patients.map((patient) => {
      return (
        <tr key={patient.name}>
          <td>{patient.num}</td>
          <td>{patient.name}</td>
          <td>{patient.time}</td>
          <td>{patient.kind}</td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Dr. {appointments.firstName} {appointments.lastName}</h2>
        <h4>{appointments.email}</h4>
        <table className="appointment-table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <div></div>
  } 
}

export default AppointmentsList;