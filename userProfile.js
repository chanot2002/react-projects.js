import React from 'react';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <h3>{props.name}'s Profile</h3>
      <p>Role: {props.role}</p>
      {props.role === "Admin" && <p><strong>Welcome, Admin!</strong></p>}
      <p>Email: {props.email}</p>
      <div>
        <p>Skills:</p>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;