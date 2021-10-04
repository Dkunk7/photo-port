import React from 'react'; // Module said this should be in this file, but I added it bc it wasnt here
import './App.css';
import About from './components/About';
import Nav from "./components/Nav";

function App() {
  return (
    <div> 
    <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
