import React, { Component } from 'react';
import logo from './logo.svg';
import MyForm from './Form'
import Header from './partials/header'
import Footer from './partials/Footer'
import 'flexboxgrid/dist/flexboxgrid.css'
// import './App.css';
const AlertaSafari=(props)=>{
  return(
    <div class="modal">
      <div class="modal__inner">
        <div class="modal__header">
          <h4>¿Estas Usando Safari?</h4>
          <button className="modal__close" onClick={props.closeModal}>X</button>
        </div>
        <div class="modal__body">
          <p>Este sitio web fue testeado en Chrome y Firefox. Para obtener los mejores resultados, recomendamos utilizar uno de estos navegadores.</p>
        </div>
      </div>
    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isSafari:false,
    }
    this.closeAlert = this.closeAlert.bind(this);
  }
  closeAlert(){
    this.setState({
      isSafari:false
    })
  }
  componentDidMount(){
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      this.setState({
        isSafari:true
      })
    }
  }
  render() {
    return (
      <div className="App" style={{paddingBottom:55}}>
        {this.state.isSafari &&
          <AlertaSafari closeModal={this.closeAlert}/>
        }
        <Header />
        <MyForm />
        <Footer />
      </div>
    );
  }
}

export default App;
