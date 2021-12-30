import PortfolioList from '../portfolioList/PortfoliolList';
import './portfolio.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Portfolio() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      loop: false,
      strings: ['Browse my work.', 'Browse my work..', 'Browse my work...'],
    });
  }, []);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },

    {
      id: 'mobile',
      title: 'Mobile App',
    },

    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];
  return (
    <div
      className="portfolio"
      id="portfolio"
      style={{
        backgroundImage: 'url(' + 'assets/portfoliobackground5.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>
        <span ref={textRef}></span>
      </h1>
      <ul>
        {list.map((item) => {
          <PortfolioList title={item.title} />;
        })}
      </ul>

      <div className="container">
        <div className="item">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-Work-Experience-5c5e52aac53a43ecae2659e95fb30a74"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>

          <img src="assets/suitcasedark.png" alt="" />
          <h2>Work Experience</h2>
          <p>
            During my two internships as a Knowledge Management Consultant at
            Bombardier Aerospace, I honed my analytical thinking skills to
            design various processes related to the new Engineering Technical
            Talent Module used by 1000+ engineering personnel, all while
            communicating bilingually.
          </p>
        </div>

        <div className="item">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-CAD-Portfolio-ae9e643e12164d9784996ec471d55ea6"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>

          <img src="assets/engdrawingdark.png" alt="" />
          <h2>CAD Portfolio</h2>
          <p>
            Case Studies <br />
            <em>
              Problem Definition, Wireframing, Prototyping, User Personas,
              Competitive Analysis
            </em>
            <br />
          </p>
        </div>

        <div className="item">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-UX-Design-Portfolio-c060cb2ef704413b8161277cd55998b3"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>
          <img src="assets/wireframedark.png" alt="" />
          <h2>UI/UX Design Portfolio</h2>
          <p>
            Case Studies <br />
            <em>
              Problem Definition, Wireframing, Prototyping, User Personas,
              Competitive Analysis
            </em>
            <br />
            <em>Tools: Figma, Adobe XD, Illustrator and Photoshop</em>
          </p>
        </div>

        <div className="item">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-Visual-Design-Portfolio-ab510d58b66c4eda8314d380b050a82b"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>
          <img src="assets/designdark.png" alt="" />
          <h2>Visual Design Portfolio</h2>
          <p>
            Marketing content and branding <br />
            <em>
              Figma, Adobe Creative Suite (Photoshop, Illustrator, Premiere
              Pro), Procreate
            </em>
            <br />
          </p>

          <p> </p>
        </div>

        <div className="item">
          <form
            action="https://alive-clavicle-a9c.notion.site/Ena-Manjgo-Engineering-Projects-465efb24e1f4407c8a3364e80309ab1e"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>
          <img src="assets/hardhatdark.png" alt="" />
          <h2>Engineering Projects</h2>
          <p>
            Developing mechanical prototypes <br />
            <em>
              Iterative Design Process, Quality Function Deployment, User
              Personas, Situaton of Concern Research
            </em>
            <br />
          </p>
        </div>

        <div className="item">
          <form
            action="https://www.notion.so/Ena-Manjgo-Art-Portfolio-d54a85210fe943e48d82d9d57471c3a4"
            target="_blank"
          >
            <button class="btn third">See more</button>
          </form>
          <img src="assets/pencildark.png" alt="" />
          <h2>Artwork and Photography</h2>
          <p>Things I like to do in my spare time.</p>
        </div>
      </div>

      <div className="arrow">
        <a href="#contact">
          <img
            src="assets/WebsiteContent/HandDrawnAssets/arrowdown.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
