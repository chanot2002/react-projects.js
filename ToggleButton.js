import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-button">
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;