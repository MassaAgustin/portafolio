import React from 'react'
import { Navigation } from './navigation/Navigation'

import EmailProvider from './context/Provider'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'


function App() {

  return (
    <EmailProvider>
      <Navigation />
    </EmailProvider>
  )
}

export default App;
