import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';
import KadetLogo from './assets/images/KadetLogo.svg';
import Setup from './components/setup/Setup';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div>
        <div className='flex justify-center mt-5'>
          <img src={KadetLogo} alt='Logo' width="101" />
        </div>
        <Setup />
        
    </div>
  )
}

popupRoot.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
