import './works.scss';
import { useEffect, useRef } from 'react';

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-edge"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-firefox"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-chrome"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-opera"></i>
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/WebsiteContent/Enapics/Flying.jpg" alt="" />
                </div>

                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores molestias commodi necessitatibus corrupti magni
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="assets/WebsiteContent/Illustrations/ZigZag.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/WebsiteContent/HandDrawnAssets/arrowleft.png"
        className="arrow left"
        alt=""
      />
      <img
        src="assets/WebsiteContent/HandDrawnAssets/arrowright.png"
        className="arrow right"
        alt=""
      />
    </div>
  );
}
