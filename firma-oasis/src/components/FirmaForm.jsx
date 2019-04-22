import React, { Component } from 'react';
import MyForm from './Form'
import Header from './partials/header'
import Footer from './partials/Footer'
class FirmaForm extends Component {
  render() {
    return (
      <div className="App" style={{paddingBottom:55}}>
        <Header />
        <MyForm />
        <Footer />
      </div>
    )
  }
}
export default FirmaForm