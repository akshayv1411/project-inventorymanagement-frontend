import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUsers1 from './Componets/AddUsers1'
import AddCategories from './Componets/AddCategories';
import Dashboardn from './Componets/Dashboard'
import NavBar1 from './Componets/NavBar1';
import SignUp from './Componets/SignUp';
import Login from './Componets/Login'
import AddProductPage from './Componets/AddProductPage';

function App() {
  return (
    <div className="App">
 
       <Router>
          <NavBar1 />
              <div className="wrapper" style={{marginLeft:'50px'}}>
                <Routes>
                  <Route exact path="/adduser" element={<AddUsers1 />} />
                  <Route exact path="/addcategories" element={<AddCategories/>} />
                  <Route exact path="/dashboard" element={<Dashboardn />} />
                  <Route exact path="/register" element={<SignUp />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/logout" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/addproducts" element={<AddProductPage />} />
                </Routes>
              </div>
          </Router>

    </div>
  );
}

export default App;
