import React from 'react';

const PhysiciansList = ({ physicians }) => {
  const physiciansNames = physicians.map((name) => {
    return <li>{name}</li>
  })
  return (
    <div className="physiciansList-container">
      <h1>notable</h1>
      <h3>PHYSICIANS</h3>
      <ul>{physiciansNames}</ul>
    </div>
  );
}

export default PhysiciansList;