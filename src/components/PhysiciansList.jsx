import React from 'react';

const PhysiciansList = ({ physicians, requestAppointments }) => {
  const physiciansNames = physicians.map((name) => {
    return (
      <li onClick={requestAppointments} key={name}>
        {name}
      </li>
    )
  })
  return (
    <div className="physiciansList-container">
      <h1>notable</h1>
      <h3>PHYSICIANS</h3>
      <ul>{physiciansNames}</ul>
      <div className="logout-button">Logout</div>
    </div>
  );
}

export default PhysiciansList;