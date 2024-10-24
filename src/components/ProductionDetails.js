import React from 'react';
;

const ProductionDetails = () => {
  return (
    <div className="production-details">
      <h4>Production details</h4>
      <div className="production-chart">
        <div className="bar" style={{ height: '260px' }}>2603 kg</div>
        <div className="bar" style={{ height: '150px' }}>1500 kg</div>
        <div className="bar" style={{ height: '209px' }}>2090 kg</div>
        <div className="bar" style={{ height: '262px' }}>2620 kg</div>
        <div className="bar" style={{ height: '211px' }}>2110 kg</div>
        <div className="bar" style={{ height: '120px' }}>1200 kg</div>
      </div>
    </div>
  );
};

export default ProductionDetails;
