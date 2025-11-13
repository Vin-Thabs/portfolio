import {Routes, Route} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import Main from './pages/Main';

function About()
{
  return(
    <h1>
      About Me
    </h1>
  )
}

function Contact()
{
  return (
    <h1>
      Contact me
    </h1>
  )

}

export default function App() {
    
  return (
    <div className="Main-app">
      {/* Routes */}
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main" element={<Main />}/>
      </Routes>

      
    </div>
  );
}