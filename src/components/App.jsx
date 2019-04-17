import React from 'react';

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
    return (
      <div>Hello world</div>
    )
  }
}

export default App;