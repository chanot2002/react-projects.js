import React from 'react';

function Greeting(props) {
  return (
    <div className="greeting">
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to our React application.</p>
    </div>
  );
}

export default Greeting;