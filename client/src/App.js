import {Routes, Route} from 'react-router-dom';
import Welcome from "./components/Welcome";

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
      </Routes>

      
    </div>
  );
}