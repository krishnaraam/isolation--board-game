import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{fontSize:"30px"}}>Isolation Board</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="nav-items">Game</Nav.Link>
        <Nav.Link href="#features" className="nav-items">Rules</Nav.Link>
        <Nav.Link href="#pricing" className="nav-items">Algorithms Used</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default App;
