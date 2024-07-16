import React from 'react';
import './about us.css';
import logo from './Images/logo.jpg';
import manas from './Images/manas.jpg';
import bhavyanshi from './Images/bhavyanshi.jpg';
import manisha from './Images/manisha.jpg';
import aayushi from './Images/aayushi.jpg';
import instagramLogo from './Images/instagram logo.jpg';
import linkedinLogo from './Images/linkedin logo.jpg';

const AboutUs = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="stylesheet" type="text/css" href="about us.css" />
        <link rel="icon" href={logo} type="image/x-icon" />
      </head>
      <body>
        <br /><br />
        <center>
          <img src={logo} height="150px" width="150px" alt="Webcycle Logo" />
        </center>
        <h1>About Us - Webcycle</h1>
        <br /><br />
        <div className="backclass">
          <p>
            <b>About Us</b>
            <br /><br />
            Welcome to Webcycle, where sustainability meets innovation! Founded by a group of passionate friends, Webcycle is our collective effort to inspire and empower individuals towards a greener future.
          </p>
          <br /><br />
          <p>
            <b>Our Story</b>
            <br /><br />
            Born from our shared love for the planet and a deep-seated desire to make a positive impact, Webcycle began as a brainstorming session among friends. Fueled by our diverse backgrounds in environmental science, engineering, and design, we set out to create a platform that not only educates but also motivates action towards sustainable living.
          </p>
          <br /><br />
          <p>
            <b>Mission</b>
            <br /><br />
            At Webcycle, our mission is clear: to promote sustainable practices and environmental stewardship through accessible and engaging content. We believe that small actions lead to significant change, and through our platform, we aim to empower individuals to adopt eco-friendly habits in their daily lives.
          </p>
          <br /><br />
          <p>
            <b>Meet the Team</b>
            <br /><br />
            Meet the passionate individuals behind Webcycle:
          </p>
          <div className="division">
            <center>
              <img src={manas} height="70px" width="55px" className="photo" alt="Manas Verma" />
            </center>
            <br />Manas Verma
            <br />
            <img src={instagramLogo} height="20px" width="20px" alt="Instagram" />
            <a href="https://www.instagram.com/mv_is_here21" target="_blank" rel="noopener noreferrer">
              mv_is_here21
            </a>
            <br />
            <img src={linkedinLogo} height="20px" width="20px" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/manas-verma-86a632283/" target="_blank" rel="noopener noreferrer">
              manas verma
            </a>
          </div>
          <div className="division">
            <center>
              <img src={bhavyanshi} height="70px" width="55px" className="photo" alt="Bhavyanshi Karela" />
            </center>
            <br />Bhavyanshi Karela
            <br />
            <img src={instagramLogo} height="20px" width="20px" alt="Instagram" />
            <a href="https://www.instagram.com/bhavyan.she/" target="_blank" rel="noopener noreferrer">
              bhavyan.she
            </a>
            <br />
            <img src={linkedinLogo} height="20px" width="20px" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/bhavyanshi-karela-252a86274/" target="_blank" rel="noopener noreferrer">
              bhavyanshi karela
            </a>
          </div>
          <div className="division">
            <center>
              <img src={manisha} height="70px" width="55px" className="photo" alt="Manisha Choudhary" />
            </center>
            <br />Manisha Choudhary
            <br />
            <img src={instagramLogo} height="20px" width="20px" alt="Instagram" />
            <a href="https://www.instagram.com/manisha15_07" target="_blank" rel="noopener noreferrer">
              manisha15_07
            </a>
            <br />
            <img src={linkedinLogo} height="20px" width="20px" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/manisha-choudhary-71ba5828b/" target="_blank" rel="noopener noreferrer">
              manisha choudhary
            </a>
          </div>
          <div className="division">
            <center>
              <img src={aayushi} height="70px" width="55px" className="photo" alt="Aayushi Prajapati" />
            </center>
            <br />Aayushi Prajapati
            <br />
            <img src={instagramLogo} height="20px" width="20px" alt="Instagram" />
            <a href="https://www.instagram.com/aayushiprajapati615" target="_blank" rel="noopener noreferrer">
              aayushiprajapati615
            </a>
            <br />
            <img src={linkedinLogo} height="20px" width="20px" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/aayushi-prajapati-00189b28b/" target="_blank" rel="noopener noreferrer">
              aayushi prajapati
            </a>
          </div>
          <br /><br />
          <p>
            <b>Our Approach</b>
            <br /><br />
            Through informative articles, practical tips, and inspiring stories, we aim to make sustainability accessible and relevant to everyone. From reducing plastic waste to promoting renewable energy solutions, we cover a wide range of topics aimed at empowering our audience to live more sustainably.
          </p>
          <br /><br />
          <p>
            <b>Join Us</b>
            <br /><br />
            Whether you're just beginning your sustainability journey or are already a seasoned eco-warrior, Webcycle invites you to join our community. Together, we can make a difference—one small step at a time.
          </p>
          <br /><br />
          <p>
            <b>Get Involved</b>
            <br /><br />
            Explore our content, join the conversation on social media, and subscribe to our newsletter for the latest updates and tips on sustainable living.
            <br />
            Thank you for visiting Webcycle, where we're dedicated to cycling towards a greener tomorrow, today!
          </p>
        </div>
      </body>
    </div>
  );
}

export default AboutUs;
