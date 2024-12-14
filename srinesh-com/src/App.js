import logo from './assets/Megan.png';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <body>
        <Navbar />
      </body>
    </div>
  );
}

export default App;
