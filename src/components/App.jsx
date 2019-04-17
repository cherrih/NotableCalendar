import React from 'react';
import PhysiciansList from './PhysiciansList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: {}
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
        console.log(appointments)
        this.setState({
          appointments: appointments[physician]
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { physicians } = this.state;
    return (
      <div>
        <PhysiciansList physicians={physicians} requestAppointments={this.requestAppointments}/>
      </div>
    )
  }
}

export default App;