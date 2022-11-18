import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.js';
import LogIn from './components/LogIn.js';
import SingIn from './components/SingIn.js';
import {AuthProvider} from './context/authContext'

function App() {
  return (
    <div className='bg-slate-300 text-white h-screen flex'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/singin' element={<SingIn/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
