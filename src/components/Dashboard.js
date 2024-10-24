// Dashboard.js
import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h2>Greenvalley Cardamom <span>2019</span></h2>
        <button className="add-crop-btn">+ Add crop</button>
      </header>

      <div className="info-section">
        <div className="info-box">
          <p>Crop name</p>
          <h3>Cardamom</h3>
        </div>
        <div className="info-box">
          <p>Area</p>
          <h3>53 Acre</h3>
        </div>
        <div className="info-box">
          <p>Last production</p>
          <h3>1200 kg</h3>
        </div>
      </div>

      <div className="environment-data">
        <div className="data-box">
          <h4>Air temperature</h4>
          <p>38 C <span>High</span></p>
        </div>
        <div className="data-box">
          <h4>Water content</h4>
          <p>32% <span>Good</span></p>
        </div>
        <div className="data-box">
          <h4>pH value</h4>
          <p>8 <span>Base</span></p>
        </div>
      </div>

      <div className="financial-stats">
        <h4>Financial statistics</h4>
        <p>Achieved 78%</p>
        <div className="profit-stats">
          <div className="stat-box">
            <p>Current profit</p>
            <h3>64 Lakh</h3>
          </div>
          <div className="stat-box">
            <p>Expected profit</p>
            <h3>82 Lakh</h3>
          </div>
        </div>
      </div>

        <div className="dashboard-content">
        <div className="card">
          <h3>Crop name</h3>
          <p>Cardamom</p>
        </div>
        <div className="card">
          <h3>Area</h3>
          <p>53 Acre</p>
        </div>
        <div className="card">
          <h3>Last production</h3>
          <p>1200 kg</p>
        </div>
        <div className="card">
          <h3>Air temperature</h3>
          <p>38 C High</p>
        </div>
        <div className="card">
          <h3>Water content</h3>
          <p>32% Good</p>
        </div>
        <div className="card">
          <h3>pH value</h3>
          <p>8 Base</p>
        </div>
  </div>

    </div>
  );
};

export default Dashboard;
