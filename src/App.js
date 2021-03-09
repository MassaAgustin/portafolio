import React, { useState, Fragment } from 'react'
import { Navigation } from './navigation/Navigation'

import EmailProvider from './context/Provider'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  
  return (
    <Fragment>
      <EmailProvider>
        <Navigation />
      </EmailProvider>
    </Fragment>
  )
}

export default App;
