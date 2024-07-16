import React from 'react';
import './contact us.css';
import logo from './Images/logo.jpg';

function handleSubmit(event) {
  event.preventDefault();
  window.location.href = "thankyou.html";
}

const ContactUs = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="stylesheet" type="text/css" href="contact us.css" />
        <link rel="icon" href={logo} type="image/x-icon" />
      </head>
      <body>
        <br /><br />
        <center>
          <img src={logo} height="150px" width="150px" alt="Webcycle Logo" />
        </center>
        <h1>Contact Us - Webcycle</h1>
        <br /><br />
        <div className="backclass">
          <p>
            <b>Get in Touch with Webcycle</b>
            <br />
            We are excited to connect with you! Whether you have questions, feedback, or ideas to share, we’d love to hear from you. At Webcycle, we believe in the power of community and collaboration to drive sustainable change.
          </p>
          <br />
          <p>
            <b>Our Mission:</b>
            <br />
            Promoting sustainable practices and environmental stewardship through accessible and engaging content. We aim to empower individuals to adopt eco-friendly habits in their daily lives.
          </p>
          <br />
          <p>
            <b style={{ fontSize: 'larger' }}>Contact Information:</b>
            <br />
            <b>Email:</b>
            For general inquiries and support, email us at: info@webcycle.com
          </p>
          <br />
          <p>
            <b>Follow Us:</b>
            Join our community on social media to stay engaged and inspired. Follow us on:
            <ul>
              <li>Instagram: @webcycle</li>
              <li>Twitter: @webcycle</li>
              <li>Facebook: Webcycle</li>
            </ul>
          </p>
          <br />
          <p>
            <b>Visit Our Blog:</b>
            Explore our blog for informative articles, practical tips, and inspiring stories on sustainable living.
            <a href="#" className="visiting">Visit Blog</a>
          </p>
          <br /><br />
          <div className="form">
            <br />
            <h2>Form</h2>
            <br /><br />
            <form id="myForm" onSubmit={handleSubmit}>
              <label htmlFor="fname">First Name:</label>
              <input type="text" id="fname" name="fname" required />
              <label htmlFor="lname" style={{ paddingLeft: '100px' }}>Last Name:</label>
              <input type="text" id="lname" name="lname" required />
              <br /><br />
              <label htmlFor="gender">Gender:</label>
              <input type="radio" name="gender" value="M" required />M
              <input type="radio" name="gender" value="F" required />F
              <br /><br />
              <label htmlFor="mobile">Mobile No:</label>
              <input type="tel" id="mobile" name="mobile" required />
              <label htmlFor="email" style={{ paddingLeft: '80px' }}>Email:</label>
              <input type="email" id="email" name="email" style={{ width: '200px' }} required />
              <br /><br />
              <label htmlFor="options">Type of the form:</label>
              <select id="options" name="options" required>
                <option value="" disabled selected>--select--</option>
                <option value="feedback">Feedback</option>
                <option value="news">News</option>
                <option value="story">Story</option>
                <option value="query">Query</option>
              </select>
              <br /><br />
              <label>Content:</label>
              <input type="text" id="content" name="content" style={{ marginLeft: '30px', height: '100px', width: '470px' }} required />
              <br /><br /><br />
              <button id="submitButton" type="submit">Submit</button>
            </form>
          </div>
          <br /><br />
          <p>
            <b>Thank You</b>
            for your interest in Webcycle. Together, we can make a difference and work towards a greener tomorrow. We look forward to hearing from you!
          </p>
        </div>
      </body>
    </div>
  );
}

export default ContactUs;
