import React from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './routes';
import MobileHeader from './components/MobileHeader/MobileHeader';

function App() {

  return (
    <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <div className="off-canvas-content" data-off-canvas-content>
         <MobileHeader />
          <Header />
          <Routes />
          <hr />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
