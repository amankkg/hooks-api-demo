import React from 'react';
import './App.css';

function timeLogger() {
  const date = new Date()

  console.log(date.toLocaleTimeString())
}

class App extends React.Component {
  state = {
    value: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(timeLogger, 1000)
  }

  componentDidUpdate() {
    console.log(this.state.value)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  decrement = () => this.setState(prevState => ({value: prevState.value - 1}))

  increment = () => this.setState(prevState => ({value: prevState.value + 1}))

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Counter: {this.state.value}
          </p>
          <button onClick={this.decrement}>decrement</button>
          <button onClick={this.increment}>increment</button>
        </header>
      </div>
    );
  }
}

export default App;
