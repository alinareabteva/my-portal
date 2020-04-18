import React, {Component} from 'react';
import './Signup.css';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      email: '',
      redirect: false
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup(){
    if(this.state.username && this.state.password){
      PostData('signup', this.state).then ((result) =>{
        let responseJSON = result;
        if(responseJSON.userData){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({redirect: true });

        }
        else{
          console.log("Signup error!");
        }
      });
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){

    if(this.state.redirect){
       return (<Redirect to={'/home'} />)
    }

    if(sessionStorage.getItem("userData")){
       return (<Redirect to={'/home'} />)
    }

  return (
    <div className="row small-up-2 medium-up-7 large-up-12">
      <div className="column bodyPart">
        <h2 className="font2">Signup Page</h2>
        <p className="fontu">Username</p>
        <input type="text" name="username"  className="marg" placeholder="username" onChange={this.onChange}/>
        <p className="fontu">Password</p>
        <input type="password" name="password"  className="marg" placeholder="password" onChange={this.onChange}/>
        <p className="fontu">Email</p>
        <input type="email" name="email"  className="marg" placeholder="email" onChange={this.onChange}/>
        <p className="fontu">Telefon</p>
        <input type="text" name="telefon"  className="marg" placeholder="telefon" onChange={this.onChange}/>

        <input type="submit" value="Signup" className="button marg" onClick={this.signup}/>
        <a href="/login">Login</a>
      </div>  </div>

  );
}
}
export default Signup;
