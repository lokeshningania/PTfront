import './App.css';
import SideBar from './components/navigation/SideBar';
import {BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/home/home';

function App() {
  return (
    <Router>
      
      <HomePage/>
     
    </Router>
    
  );
}

export default App;
