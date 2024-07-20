import React from 'react';
import './contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_42ab4on', 'template_79s09ll', e.target, 'a7VowePB15h3VtEHf')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="contact-sec sec-pad" id = 'contact'>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-detail">
              <h1 className="section-title">Contact Us</h1>
              <ul className="contact-ul">
                <li>
                  <FaMapMarkerAlt className="icon-location" /> 21st Flr Century Diamond Tower, Century City, Kalayaan Avenue Cor. Salamanca St., Brgy. Poblacion, Makati City.
                </li>
                <li>
                  <FaPhone className="icon-phone" /> +63 956 216 1407
                </li>
                <li>
                  <FaEnvelope className="icon-envelope" /> info@ovrealty.ph
                </li>
              </ul>
              <div className="social-icons">
                <a href="https://www.facebook.com/ovrealtyph" className="fb"><FaFacebookF /></a>
                <a href="https://www.instagram.com/ovrealtycorp/" className="insta"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/ov-realty-group/" className="linkedin"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={sendEmail} className="contFrm" method="POST">
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                </div>
                <div className="col-sm-6">
                  <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                </div>
                <div className="col-sm-6">
                  <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                </div>
                <div className="col-12">
                  <textarea name="message" className="inptFld" rows="5" placeholder="Your Message..." required></textarea>
                </div>
                <div className="col-12">
                  <input type="submit" value="SUBMIT" className="inptBtn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
