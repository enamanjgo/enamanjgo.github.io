import './intro.scss';
import { Accessibility, ArrowDownwardOutlined } from '@material-ui/icons';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      strings: ['Engineering Student', 'Designer', 'Problem-solver'],
    });

    const gradient = document.querySelector('.gradient');

    function onMouseMove(event) {
      gradient.style.backgroundImage =
        'radial-gradient(at ' +
        event.clientX +
        'px ' +
        event.clientY +
        'px, rgba(159,0,191,.9) 0, #4D4FA7 70%)';
    }
    document.addEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className="intro"
      id="intro"
      style={{
        backgroundImage: 'url(' + 'assets/background4.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div class="gradient"></div>

      <div className="left">
        <div className="background"></div>
        <div className="opener"></div>
        <div className="imgContainer">
          <img src="assets/WebsiteContent/Enapics/FinalSig3.gif" alt="" />
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>

        <h2>Welcome to my portfolio.</h2>

        <a href="#about">
          <img
            src="assets/WebsiteContent/HandDrawnAssets/arrowdown.png"
            alt=""
          />
        </a>

        <div className="resume">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-Work-Experience-5c5e52aac53a43ecae2659e95fb30a74"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>
        </div>
      </div>
    </div>
  );
}
