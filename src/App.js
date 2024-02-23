import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ViewStudent from './components/Viewstudent';
import Signup from './components/Signup';
import {Route,Routes} from 'react-router-dom';
import Tablearray from './components/Tablearray';

function App() {
  return (
    <div>
     <Navbar> </Navbar>
     <Routes>
     <Route path='/t' element={<Signup/>}/>
      <Route path='/a' element={<ViewStudent />}/>
      <Route path='/b' element={<Tablearray/>}/>
     </Routes>
    
    </div>
);
}

export default App;
