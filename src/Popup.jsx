import React from 'react';
import ReactDOM from 'react-dom/client';
import KadetLogo from './assets/images/KadetLogo.svg';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div>
        <img src={KadetLogo} alt='Logo' width="250" />
        {/* <KadetLogo /> */}
        {/* <p>I am the pop-up for the Kadet wallet extension</p> */}
    </div>
  )
}

popupRoot.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
