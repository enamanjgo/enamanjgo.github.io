import './about.scss';
import '../../assets2/WebsiteContent/HandDrawnAssets/introbackground.png';

export default function About() {
  return (
    <div
      className="about"
      id="about"
      style={{
        backgroundImage: 'url(' + 'assets/aboutbackground4.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="left"
        style={{
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div className="imgContainer">
          <img src="assets/WebsiteContent/Enapics/windypic.jpg" alt="" />
          <p>In my spare time,</p>
        </div>
      </div>
      <div className="right">
        <div class="gradient"></div>
        <div class="gooey"></div>
        <div className="wrapper">
          <h2>Nice to meet you!</h2>
          <p>
            {' '}
            I’m Ena. It rhymes with Jenna! :) I’m a University of Waterloo
            student with a passion for design in all its forms. I study Systems
            Design Engineering, which is a multidisciplinary degree that focuses
            on integrating systems as a whole. I’m a creative, people-oriented
            person who is always up for a new challenge. Feel free to take a
            look at my work below!
          </p>
        </div>
      </div>

      <a href="#portfolio">
        <img src="assets/WebsiteContent/HandDrawnAssets/arrowdown.png" alt="" />
      </a>
    </div>
  );
}
