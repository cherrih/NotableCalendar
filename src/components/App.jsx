import React from 'react';
import PhysiciansList from './PhysiciansList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: []
    }
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

  render() {
    const { physicians } = this.state;
    return (
      <div>
        <PhysiciansList physicians={physicians}/>
      </div>
    )
  }
}

export default App;