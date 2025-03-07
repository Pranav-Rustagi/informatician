import React from 'react';
import construct from '../assets/construct.png';

const Develop = (props) => {
  return (
    <div className="container" style={{background: props.theme==="dark"?"black":"#f8f8f8", color: props.theme==="dark"?"white":"#333"}}>
      <h1>Under Development</h1>
      <div className="image-container">
        <img src={construct} alt="Under Development" className="development-image" />
      </div>
      <p>This page is currently under development. Please check back later.</p>

      <style jsx>{`
        .container {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          padding: 30px;
          margin-top:60px;
          border-radius: 8px;
          text-align: center;
        }

        h1 {
          margin-bottom: 20px;
        }

        .image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .development-image {
          max-width: 55%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        p {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Develop;
