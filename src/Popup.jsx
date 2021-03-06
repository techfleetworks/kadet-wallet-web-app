import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';
import KadetLogo from './assets/images/KadetLogo.svg';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div>
        <div className='flex justify-center mt-5'>
          <img src={KadetLogo} alt='Logo' width="250" />
        </div>
        <div className='text-center mt-4'>
            <h1 className='text-3xl'>I am the pop-up for the Kadet wallet extension</h1>
        </div>
    </div>
  )
}

popupRoot.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
