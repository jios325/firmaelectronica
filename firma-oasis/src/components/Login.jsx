import React, { Component } from 'react';
import Header from './partials/header'
import Footer from './partials/Footer'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCookie } from '../utils/cookies';
import { loginUserAction } from '../actions/authenticationActions';

class Login extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();
    let usuario = event.target.hotel.value;
    let password = event.target.password.value;
    const data = {
      usuario, password
    };
    // console.log(email,password)
    this.props.dispatch(loginUserAction(data));
  }

  render() {
    console.log(this.props.response.login)
    let isSuccess, message;
    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.nombre;
      if (isSuccess) {
        setCookie('hotel', this.props.response.login.response.nombre, 12);
      }
    }

    return (
      <React.Fragment>
     <Header/>
     <div className="container-fluid container">
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8 col-lg-6 mt-30 mt-100-md">
        <h3 className="mb-20">Login</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <form onSubmit={this.onHandleLogin}>
          <div className="form-group">
          <label className="form__label required">Complejo:</label>
          <div className="select">
            <select name="hotel" className="form-control" required>
              <option value="" disabled="">Selecciona un Complejo</option>
              <option value="ohr">Corporativo</option>
              <option value="vcm">Caribe Maya</option>
              <option value="goc">Complejos Cancun</option>
              {/* <option value="gos">Complejos Sens</option> */}
              <option value="gop">Complejos Palm</option>
              <option value="urban">Complejos Smart</option>
              {/* <option value="got">Complejos Tulum</option> */}
            </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form__label required">Password:</label>
            <input name="password" name="password" type="password"  className="form-control" required/>
          </div>
          {(this.props.response.login.response && this.props.response.login.response.error) &&
            <div className="mb-10">{this.props.response.login.response.error}</div>
          }
          <div>
            <button className="btn btn-primary mr-20-md" type="submit" disabled="">Login</button>
          </div>
        </form>
        </div>
      </div>
  
      </div>
      <Footer/>
      </React.Fragment>
      
    );
  }
}
const mapStateToProps = (response) => ({response});
export default connect(mapStateToProps)(Login);