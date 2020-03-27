import React, {useState, useEffect} from 'react';
import './App.css';

function timeLogger() {
  const date = new Date()

  console.log(date.toLocaleTimeString())
}

function App() {
  // state = {value: 0}
  const [value, setValue] = useState(0)

  // decrement = () => this.setState(prevState => ({value: prevState.value - 1}))
  const decrement = () => setValue(prevValue => prevValue - 1)

  // increment = () => this.setState(prevState => ({value: prevState.value + 1}))
  const increment = () => setValue(prevValue => prevValue + 1)

  // componentDidUpdate() {
  //   console.log(this.state.value)
  // }
  useEffect(() => {
    console.log(value)
  })

  // componentDidMount() {
  //   this.intervalId = setInterval(timeLogger, 1000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.intervalId)
  // }
  useEffect(() => {
    const intervalId = setInterval(timeLogger, 1000)

    const clear = () => clearInterval(intervalId)

    return clear
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: {value}
        </p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </header>
    </div>
  );
}

export default App;
