import React, { Component } from 'react';
import logo from './logo.svg';
import MyForm from './Form'
import Header from './partials/header'
import Footer from './partials/Footer'
import 'flexboxgrid/dist/flexboxgrid.css'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{paddingBottom:55}}>
        <Header />
        <MyForm />
        <Footer />
      </div>
    );
  }
}

export default App;
