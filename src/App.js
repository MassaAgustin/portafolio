import React, { Fragment } from 'react'
import { Navigation } from './navigation/Navigation'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <Fragment >
      <div className="container align-items-center justify-content-center" >
        <Header />
        <Navigation />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
