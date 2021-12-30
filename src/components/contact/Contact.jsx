import './contact.scss';
import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div
      className="contact"
      id="contact"
      style={{
        backgroundImage: 'url(' + 'assets/contactbackgroundfinal.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="left">
        <div className="top">
          <div className="salutation">
            <h1>Thank you for stopping by!</h1>
            <h4>I would love to keep in touch!</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="item">
              <a href="https://www.linkedin.com/in/ena-manjgo/" target="_blank">
                <img src="assets/LinkedIN_white.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="https://medium.com/@enamanjgo" target="_blank">
                <img src="assets/Medium_white.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/enamanjgo" target="_blank">
                <img src="assets/Github_white.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="mailto:emanjgo@uwaterloo.ca" target="_blank">
                <img src="assets/Gmail_white.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a
                href="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-Engineering-Projects-465efb24e1f4407c8a3364e80309ab1e"
                target="_blank"
              >
                <img src="assets/Notion_white.png" alt="" />
              </a>
            </div>
          </div>

          <h2>Designed and coded with ❤ by Ena Manjgo</h2>
        </div>
      </div>
    </div>
  );
}
