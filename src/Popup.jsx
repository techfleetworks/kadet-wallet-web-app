import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';
// import KadetLogo from './assets/images/KadetLogo.svg';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div>
        {/* <img src={KadetLogo} alt='Logo' width="250" /> */}
        {/* <KadetLogo /> */}
        <h1>I am the pop-up for the Kadet wallet extension</h1>
    </div>
  )
}

popupRoot.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
