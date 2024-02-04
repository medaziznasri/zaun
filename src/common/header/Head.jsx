import React from "react";

// Import the CSS file
import './Header.css';

// Your React component code here



const Head = () => {
  return (
    <>
      <header className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> Customer Support: +216 94198625</label>
            <i className='fa fa-envelope'></i>
            <label> Email: azizchaimaStore@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Explore Themes FAQs</label>
            <label>Need Assistance?</label>
            <label> e Danous</label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
