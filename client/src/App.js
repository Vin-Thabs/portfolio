import {Routes, Route} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import Home from './pages/Home';



export default function App() {
    
  return (
    <div className="Main-app">
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path="/main" element={<Home />}/>
      </Routes>

      
    </div>
  );
}