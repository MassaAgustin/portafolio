import React from 'react'
import { Navigation } from './navigation/Navigation'

import EmailProvider from './context/Provider'

import { Header } from './components/Header'
import { Footer } from './components/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <EmailProvider>
      <Header />
      <Navigation />
      <Footer />
    </EmailProvider>
  )
}

export default App;
