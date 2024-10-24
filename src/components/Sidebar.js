import React from 'react';
import '../Styles/Sidebar.css'; // create styles separately

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile-picture.jpg" alt="Profile" />
        <h3>Saroj Nadar</h3>
        <p>Farm manager</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>All farms</li>
        <li>Gov subsidies</li>
        <li>Settings</li>
      </ul>
      <button className="add-farm-btn">+ Add farm</button>
    </div>
  );
};

export default Sidebar;