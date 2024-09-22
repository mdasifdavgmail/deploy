import React, { useState } from 'react';
import './Dashboard.css';  

const Dashboard = () => {

  const [heartStatus, setHeartStatus] = useState([false, false, false]);

 
  const toggleHeart = (index) => {
    setHeartStatus(heartStatus.map((status, i) => i === index ? !status : status));
  };

  return (
    <div>
      <h1 className='h1'>Rise and shine! Let’s make some money today!</h1>
      
      <div className="dashboard">
       
        <div className="section create-store">
          <div className='store-info'>
            <h2 className='s1'>
              Create your first store <br/><span className="highlight">and get a free gift!</span>
            </h2>
          </div>

          <div className='store-checklist'>
            <p>Store setup checklist:</p>
            <hr/>
            <ul>
              <li className="progress-container">
                <p>Sign up for Printify</p> 
              </li>
              <li className="progress-container">
                Create your first product 
                <div className="progress-bar">
                  <div className="green"></div>
                </div>
              </li>
              <li className="progress-container">
                Connect to Etsy, Shopify, etc.
                <div className="progress-bar"> 
                  <div className="green"></div>
                </div>
              </li>
            </ul>

            <div className="s2">
              <p>Complete the steps above and earn a $5.00 discount on your next order!</p>
              <p className='s3'><span>i</span></p>
              <div className='s4'>
                <p> Complete the steps above and earn a $5.00<br/> discount on your next order! <br/>Coupons will expire in 7 days.</p>
              </div>
              <button><big>+</big>&nbsp; Create first product</button>
            </div>
          </div>
        </div>

        
        <div className="section double-sales">
          <div className="double-sales-content">
            <h2>Double your chances of making that<br/> first sale!</h2>
            <p>Stand out from competition and build a customer base with the help<br/> of AI powered Niche Generator.</p>
            <button className="sales-button"> Try it now</button>
          </div>
          <div className='s5'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0I9-Bno7heabRn7nO6YEPC22BlfmTRQGzA&s' alt="Niche Generator" />
          </div>
          <div className='s6'>
            <h3>Mindful happiness with affirmations</h3>
          </div>
        </div>
      </div>

      
      <div className='images'>
        <div className='block1'>
          <img src='https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/65e056b7cdbda1847f0b2152.jpg' alt="Product 1" />
          <div 
            className={`heart-circle ${heartStatus[0] ? 'active' : ''}`}
            onClick={() => toggleHeart(0)}
          >
            <span className="heart">&hearts;</span>
          </div>
          <span>Unisex Jersey Short Sleeve Tee</span>
          <p>By Bella+Canvas$3000</p>
          <h3>From USD 9.16</h3>
        </div>

        <div className='block2'>
          <img src='https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/654e2447bdde291499078577.jpg' alt="Product 2" />
          <div 
            className={`heart-circle ${heartStatus[1] ? 'active' : ''}`}
            onClick={() => toggleHeart(1)}
          >
            <span className="heart">&hearts;</span>
          </div>
          <span>Matte Vertical Posters</span>
          <p>By Gildan:$5000</p>
          <h3>From USD 8.00</h3>
        </div>

        <div className='block3'>
          <img  src='https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/634e94a24853f68f060648c0.jpg' alt="Product 3" />
          
          <div 
            className={`heart-circle ${heartStatus[2] ? 'active' : ''}`}
            onClick={() => toggleHeart(2)}
          >
            <span className="heart">&hearts;</span>
          </div>
          <span>Matte Vertical Posters</span>
          <p>By Generic brand</p>
          <h3>From USD 8.16</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
