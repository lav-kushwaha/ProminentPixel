import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Header/Navbar';
import Temporary from './Temporary/Temporary';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
     <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='coming-soon' element={<Temporary/>}/>
      </Route>
     </Routes>
     <Footer/>
    </Router>
  );
}
export default App;
