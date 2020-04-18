import React from 'react';
import './NotFound.css';
import error from './error.png';

function NotFound() {
  return (
 <div className="row small-up-2 medium-up-7 large-up-16">
    <div className="column bodyPart">
        <div className="error"><a href="/home"><img src={error} className="img-fluid" alt="error"/></a></div>
    </div>
  </div>

  );
}

export default NotFound;
