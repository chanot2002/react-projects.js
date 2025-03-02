import React from 'react';
import Greeting from './components/greeting';
import UserProfile from './components/userProfile';
import Counter from './components/counter';
import ToggleButton from './components/ToggleButton';
import './style.css';


function App() {
  const user = {
    name: "Alex",
    role: "Developer",
    skills: ["React", "JavaScript", "CSS"],
    email: "alex@example.com"
  };

  return (
    <div className="app">
      <h1>Simple React App</h1>
      <Greeting name={user.name} />
      <UserProfile 
        name={user.name} 
        role={user.role} 
        skills={user.skills}
        email={user.email}
      />
      <Counter initialValue={0} />
      <ToggleButton />
    </div>
  );
}

export default App;