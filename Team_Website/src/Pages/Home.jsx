import "./Home.css";
// import hero-img from "../assets/img/hero-bg-img.jpg";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h2 className="hero-text">Welcome to Wayne Enterprises</h2>
        <p className="hero-text-2">Your comfort is our happiness...</p>
        <a href="/about" className="hero-link">
          Learn More
        </a>
      </div>
      <div className="home-quick-links">
        <ul>
          <li>
            <a href="#news-and-events">News and Events</a>
          </li>
          <li>
            <a href="#promotions">Promotions</a>
          </li>
          <li>
            <a href="#sdg">SDG</a>
          </li>
          <li>
            <a href="#company-data">Company Data</a>
          </li>
          <li>
            <a href="#progress-report">Progress Report</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#good-to-know">Good To Know</a>
          </li>
        </ul>
      </div>
      <section className="home-body">
        <div id="news-and-events">
          <marquee className="section-title">News and Events</marquee>
          <div className="news-cards">
            <div className="newscard"></div>
            <div className="newscard"></div>
            <div className="newscard"></div>
            <div className="newscard"></div>
            <div className="newscard"></div>
            <div className="newscard"></div>
            <div className="newscard"></div>
          </div>
        </div>
      </section>
    </>
  );
}
