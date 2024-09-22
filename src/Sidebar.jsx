import React from 'react';
import './Sidebar.css';  

const Sidebar = () => {
    
  return (
    <div className="sidebar">
     <h2 className='im'>
  <img  src="data:image/jpeg;base64,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"  style={{ height: '54px', width: '54px', borderRadius: '50%', marginRight: '12px' }}/>
  Printify
</h2>

      <ul>
        <li>
          <img 
            src='https://cdn-icons-png.freepik.com/256/6442/6442311.png?semt=ais_hybrid' 
            alt="Dashboard Icon" 
          />
          Dashboard
        </li>
        <li><img src="https://cdn-icons-png.freepik.com/256/15167/15167242.png?semt=ais_hybrid"></img>Catalog</li>
        <li>
            <img src="https://cdn-icons-png.freepik.com/256/14988/14988230.png?semt=ais_hybrid"></img>My Products</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/4715/4715245.png?semt=ais_hybrid"></img>Orders</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/584/584026.png?semt=ais_hybrid"></img>Wallet</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/9124/9124661.png?semt=ais_hybrid"></img>Insights</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/12538/12538420.png?semt=ais_hybrid"></img>Store Settings</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/12520/12520474.png?semt=ais_hybrid"></img>Branding</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/9449/9449725.png?semt=ais_hybrid"></img>Printify Premium</li>
        <li><img src="https://cdn-icons-png.freepik.com/256/9572/9572888.png?semt=ais_hybrid"></img>Need Help?</li>
      </ul>
    </div>
  );
}

export default Sidebar;
