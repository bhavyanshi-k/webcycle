import React from 'react';
import './thankyou.css';
import logo from './Images/logo.jpg';

const ThankYou = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>Thank you</title>
        <link rel="stylesheet" type="text/css" href="thankyou.css" />
        <link rel="icon" href={logo} type="image/x-icon" />
      </head>
      <body>
        <div className="circle"></div>
        <div className="line1"></div>
        <div className="line2"></div>
        <br /><br />
        <div className="text">
          <h1>Thank You!</h1>
          <h3>Form submitted successfully.</h3>
          <br /><br />
          <p>Click <a href="contact us.html">here</a> to go back.</p>
        </div>
      </body>
    </div>
  );
}

export default ThankYou;
