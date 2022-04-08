import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App(){
    return(
        <div className='App'>
            <div>Salut</div>
            <Router>
                <Routes>
                    {/* <Route path='/' element={<Home/>}/> */}
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;