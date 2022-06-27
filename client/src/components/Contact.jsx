import React from "react";



const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact us</h2>
      <div className="contact-wrapper">
        <div className="social-media-wrapper">
          <div className="instagram" />
          <div className="twitter" />
          <div className="behance" />
          <div className="facebook" />
          <div className="reddit" />
        </div>
        <div className="contact-form">
          <div className="contact-form-text">
            Leave us a message!
            <small>Our team will get back to you within a day.</small>
          </div>
          <div className="message-form">
            <form>
              <div className="contact--inputs">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea />
            </form>
          </div>

          <div className="contact-btn">Send</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
