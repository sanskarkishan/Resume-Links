import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Links } from './Links'
import { Internships } from './Internships';
import { Certification } from './Certification';
import { Hackathons } from './Hackathons';

function App() {


  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Links />}/>
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Hackathons" element={<Hackathons />} />
      </Routes>
    </Router>
  )
}

export default App
