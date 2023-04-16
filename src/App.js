import React from 'react';
import './App.css';
import Logo from './assets/img/logo.png';
const App = () => {
  return (
    <div  className='container'>
        <img src={Logo} alt='app logo'/>
        <h1>Shop now and enjoy free shipping on all orders</h1>
    </div>
  )
}
export default App;