import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './popup.css';
import KadetLogo from './assets/images/KadetLogo.svg';
import Setup from './components/setup/Setup';
import CreatePassword from './components/setup/CreatePassword';

const popupRoot = ReactDOM.createRoot(document.getElementById('popup-root'))

function Popup() {
  return (
    <div className='h-[600px] flex flex-col flex-1 pb-8'>
        <div className='flex justify-center mt-5'>
          <img src={KadetLogo} alt='Logo' width="101" />
        </div>
        <Routes>
          <Route path='/' element={<Setup />} />
          {/* <Setup /> */}
          <Route path='/createPassword' element={<CreatePassword />} />

        </Routes>
        
    </div>
  )
}

popupRoot.render(
    <React.StrictMode>
      <Router>
        <Popup />
      </Router>
    </React.StrictMode>
)
