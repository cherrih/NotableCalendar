import React from 'react';
import PhysiciansList from './PhysiciansList.jsx';
import AppointmentsList from './AppointmentsList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: null
    }
    this.requestAppointments = this.requestAppointments.bind(this);
  }

  componentDidMount() {
    fetch('/api/physicians')
      .then((physicians) => physicians.json())
      .then((physicians) => {
        this.setState({
          physicians: physicians
        })
      })
      .catch((err) => console.log(err));
  }

  requestAppointments(e) {
    const physician = e.target.innerText;
    fetch(`/api/appointments/${physician}`)
      .then((appointments) => appointments.json())
      .then((appointments) => {
        this.setState({
          appointments: appointments
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { physicians, appointments } = this.state;
    return (
      <div className="calendar-body">
        <PhysiciansList physicians={physicians} requestAppointments={this.requestAppointments}/>
        <AppointmentsList appointments={appointments}/>
      </div>
    )
  }
}

export default App;