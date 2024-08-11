// src/components/UParkFlowChart.js

import React from 'react';

const UParkFlowChart = () => {
  return (
    <div className="flow-chart">
      <h3>UPark User Journey</h3>
      <div className="flow-chart-content">
        {/* You can use SVG, or a library like react-flow-chart to create an actual flow chart */}
        <div>Sign Up → List/Search Parking → Book Parking → Use Parking → Review Experience</div>
      </div>
    </div>
  );
};

export default UParkFlowChart;