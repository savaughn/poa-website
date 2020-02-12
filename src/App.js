import React from 'react';
import logo from './logo.svg';
import Clock from './Components/Clock';
import './App.css';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="myGreeting">
          <Greeting name="Emilie"/>
          <Clock/>
        </div>
      </header>
    </div>
  );
}

export default App;
