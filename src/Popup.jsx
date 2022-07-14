import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div>I am the pop-up for the Kadet wallet extension</div>
  )
}

popupRoot.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
