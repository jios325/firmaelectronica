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
      isSuccess = this.props.response.login.response.usuario;
      if (isSuccess) {
        setCookie('hotel', this.props.response.login.response.usuario, 1);
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
          <label className="form__label required">Hotel:</label>
          <div className="select">
            <select name="hotel" className="form-control" required>
              <option value="" disabled="">Selecciona un Hotel</option>
              <option value="ohr">Corporativo</option>
              <option value="pyr">The Pyramid at Grand Oasis</option>
              <option value="goc">Grand Oasis Cancun</option>
              <option value="gop">Grand Oasis Palm</option>
              <option value="op">Oasis Palm</option>
              <option value="gos">Grand Oasis Sens</option>
              <option value="oh">Oh! The Urban Oasis</option>
              <option value="smart">Smart Cancun by Oasis</option>
              <option value="got">Grand Oasis Tulum</option>
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