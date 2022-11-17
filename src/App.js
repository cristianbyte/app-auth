import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.js';
import LogIn from './components/LogIn.js';
import SingIn from './components/SingIn.js';

function App() {
  return (
    <div className='bg-slate-300 text-white h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signin' element={<SingIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
