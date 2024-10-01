
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import SideBar from './pages/sideBar/sideBar';
import Dashboard from './pages/dashboard/dashboard';
import Projectlist from './pages/projectList/projectlist';
import Addproject from './pages/addproject/addPorject';


const App = () =>
  {

    const [isLoggedIn, setLogin] = useState(false);

    const handleLogin=()=>{
      console.log("hoo")
      setLogin(true);
    };


  return(
    <>
     
    <Router>
      <SideBar/>
      <main>
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            {isLoggedIn ?
            (
              <>

              {/* <Route path='/sidebar' element={<SideBar/>}/> */}
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/projectlist' element={<Projectlist/>}/>
              <Route path='/addproject' element={<Addproject/>}/>
              </>
              
            ):(<Route path='/login' element={<Login onLogin={handleLogin}/>}/>)

            };

          {/* <Route path='' element={isLoggedIn ? <SideBar/>:<Navigate to="/login"/>}/> */}
          {/* <Route path='*' element={<Navigate to={isLoggedIn ? '/dashboaard' : '/login'}/>}/> */}
        </Routes>
      </main>
      
    </Router>
        
    </>
  )
}

export default App;