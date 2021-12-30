import './testimonials.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="gradient">
        <div className="icons">
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
        </div>
      </div>
    </div>
  );
}
