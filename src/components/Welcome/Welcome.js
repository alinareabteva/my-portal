import React, {Component} from 'react';
import './Welcome.css';
import log from './img/log.png';

class Welcome extends Component {
  render() {
  return (
   <div className="row small-up-2 medium-up-7 large-up-12">
   <div className="column bodyPart">
  <div className="r">
  <div className="c2"><a href="/login"><img src={log} className="img-fluid size" alt="log"/></a></div>
  <div className="c2"><a href="/signup"><img src={require("./img/sign.png")} className="img-fluid size" alt="signup"/></a></div>
  
</div></div>
    </div>
  );
}
}
export default Welcome;
