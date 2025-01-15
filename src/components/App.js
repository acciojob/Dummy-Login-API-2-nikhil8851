import React from 'react';
import { useState } from 'react';
import Login from './loginForm/Login';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
  return(
    <>
    <div className="container">
  
    <Login/>
    </div>
    </>
  )
}

export default App;