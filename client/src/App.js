import {Routes, Route} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import Home from './pages/Home';
import Projects from './components/content/Projects';
import Hackathons from './components/content/Hackathons';
import Skills from './components/content/Skills';
import Interests from './components/content/Interests';
import WorkingExperince from './components/content/WorkingExperience';


export default function App() {
    
  return (
    <div className="Main-app">
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path="/main" element={<Home />}/>
        <Route path='Projects' element={<Projects />}/>
        <Route path='Hackathons' element={<Hackathons />}/>
        <Route path='Skills' element={<Skills />}/>
        <Route path='Interests' element={<Interests />}/>
        <Route path='WorkingExperience' element={<WorkingExperince />}/>
      </Routes>

      
    </div>
  );
}