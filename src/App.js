import React, { Fragment } from 'react'
import { Navigation } from './navigation/Navigation'

import { Footer } from './components/Footer'

function App() {
  return (
    <Fragment >
      <div className="container d-flex align-items-center justify-content-center 100-vh" >
        <div className="row">
          <Navigation />
          <div className="col-12">
            <Footer />
          </div >
        </div >
      </div >
    </Fragment>
  );
}

export default App;
