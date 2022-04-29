import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';

const App = () => {
  return (
    <div calssName='app'>
        <li className='navbar'>
            <Navbar />
        </li>
        <li className='main'>

        </li>
        <li className='footer'>
            
        </li>
    </div>
  )
}

export default App