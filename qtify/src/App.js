import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

     <Router>
      <Routes>
        <Route exact path="/"><Navbar /></Route>
        <Route exact path="/hero"><Hero /></Route>
      </Routes>
    </Router> 


      </header> */}

    <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<>
              <Navbar />
              <Hero />
            </>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
