import logo from './assets/Megan.png';
import './App.css';
import NavigationBar from './components/navbar';
import HomePage from './components/homepage';
import ProjectPage from './components/projectpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //routing is used to "route" to the appropriate page based on the URL clicked

function App() {
  return (
    <div className="App">
      <Router>
          <NavigationBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
