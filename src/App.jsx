import { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './features/landing/components/Header.jsx'; // Sin llaves si usas export default
import { Main } from './features/landing/components/Main.jsx';
import { Footer } from "./features/landing/components/Footer.jsx";

import { Login } from './features/auth/components/Login.jsx';
import { Register} from './features/auth/components/Register.jsx';
import { ForgotPassword } from './features/auth/components/ForgotPassword.jsx';
import {Props} from './features/landing/components/Props.jsx';

import { Rick } from './features/landing/components/Rick.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
  
      <Header />
      <Routes>
        <Route path="/Props" element={<Props />} />
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />


        <Route path="/apirick" element={<Rick />} />



      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
