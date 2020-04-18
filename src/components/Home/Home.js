import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
import Filterg from '.././Filterg/Filterg';

class Home extends Component {

    constructor(props){
    super(props);
    this.state = {
      redirect: false
  }
  this.logout =  this.logout.bind(this);
}

componentWillMount(){
  if(sessionStorage.getItem("userData")){
    console.log("Call User Feed");
  }
  else{
    this.setState({redirect: true });
  }
}
logout(){
  sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({redirect: true });
}
  render(){
    if(this.state.redirect){
       return (<Redirect to={'/login'} />)
    }

  return (
  <div className="row small-up-2 medium-up-7 large-up-12">
    <div className="column bodyPart">
    <h2 className="fontc">Catalog of Presents</h2>
    <button type='button' className="button cbut" onClick={this.logout}>Logout</button>

    <Filterg />


    </div> </div>

  );

}
}
export default Home;
