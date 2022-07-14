import React from 'react';
import { render } from 'react-dom';

function Popup() {
  return (
    <div>I am the pop-up!</div>
  )
}

// export default popup
render(<Popup />, document.getElementById("popup-root"))