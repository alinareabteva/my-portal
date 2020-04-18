import React, {Component} from 'react';
import './Login.css';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
//login: srinivas
//password: 123456

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      redirect: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  login() {
  if(this.state.username && this.state.password){
  PostData('login',this.state).then((result) => {
  let responseJson = result;
  if(responseJson.userData){
  sessionStorage.setItem('userData',JSON.stringify(responseJson));
  this.setState({redirectToReferrer: true});
  }
  });
  }
  }

  onChange(e){
  this.setState({[e.target.name]:e.target.value});
  }
  render() {

  if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
  return (<Redirect to={'/home'}/>)
  }

  return (
  <div className="row small-up-2 medium-up-7 large-up-12">
    <div className="column bodyPart">
      <h2 className="font2">Login Page</h2>
      <p className="fontu">Username</p>
      <input type="text" name="username" className="marg" placeholder="username" onChange={this.onChange}/>
      <p className="fontu">Password</p>
      <input type="password" name="password" className="marg"  placeholder="password" onChange={this.onChange}/>
      <input type="submit" value="Login" className="button marg" onClick={this.login}/>
      <a href="/signup">Registration</a>
    </div>  </div>

  );
}
}

export default Login;
