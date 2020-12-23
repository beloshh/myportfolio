import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Contact from "./Contact";
import Proj from "./Proj";
import Navbar from "../Navbar/navBar";
import Project from "./Project";
import "../Style/one.css";

function Page(props) {
  return (
    <div className="block">
      <section>
        <nav className=" navbar is-fixed-top">
          <Navbar />
        </nav>
      </section>

      <section id="two" className="hero">
        <div id="home" className="hero-body">
          <div className="columns is-tablet" id="three">
            <div className="column">
              <div id="six" className="box">
                <p id="para-one" className="subtitle is-3 ">
                  Hi, I'm
                </p>
                <p id="para-two" className="title is-1">
                  Badanga Ishak
                </p>
                <p id="para-one" className="subtitle is-3">
                  Front-end Developer <br /> And Many More
                </p>
              </div>
            </div>
            <div className="column" id="four">
              <div className="box">
                <img
                  id="five"
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716234/Images/flow_rm2uqg.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="hero">
        <div id="about-me" className="hero-body">
          <div className="columns is-tablet">
            <div className="column">
              <div id="six" className="box">
                <p className="sub-one">
                  Front-end (Mobile and Web) developer with more than 2 years of
                  well-rounded experience with a degree in the field of Computer
                  Science, extensive knowledge of modern Web techniques and love
                  for tech products.
                  <br /> Looking for an opportunity to work and level up, as
                  well as being involved in an organization that believes in its
                  people, and the power we have as a group
                </p>
              </div>
              <Contact />
            </div>
            <div className="column" id="four">
              <div className="box">
                <img
                  id="five"
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716227/Images/badanga_a17aue.jpg"
                  }
                  alt="pages"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="hero">
        <div id="services" className="hero-body">
          <div className="section-heading">
            <p id="header" className="title is-3 has-text-centered">
              Services
            </p>
          </div>

          <div className="columns">
            <div className="column">
              <div className="box">
                <p className="title is-5">Front-end Development </p>
                <p>
                  Develop visual designs for both mobile and web applications
                  using latest standards with HTML5/CSS3 while also using
                  JavaScript and React (React-Native for mobile) for added
                  functionality
                </p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <p className="title is-5">Google Cloud Engineering </p>
                <p>
                  I'm able to use Google Cloud Console and the command-line
                  interface to perform common platform-based tasks to maintain
                  one or more deployed solutions that leverage Google-managed or
                  self-managed services on Google Cloud. You can check my skill
                  IQ{" "}
                  <a href="https://drive.google.com/file/d/1WvTmyl-o0N-zSG5thwbRNCIx-YbBs_mD/view?usp=sharing">
                    HERE
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="box">
                <p className="title is-5">Technical Writing</p>
                <p>
                  I'm capable of learning complex technologies relatively
                  quickly, and finding a way to explain them in useful ways for
                  the target audience through planning and authoring technical
                  documents. You can check out my blog
                  <a href="https://badanga.hashnode.dev/"> HERE</a>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <p className="title is-5"> Project Management </p>
                <p>
                  With the skills and knowledge gathered from my university. i
                  am able to manage IT and IT related projects from
                  conceptualization to maintenance using agile framework and
                  agile tools like JIRA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="hero">
        <div id="skills" className="hero-body">
          <div className="section-heading">
            <p id="header" className="title is-3 has-text-centered">
              Skills
            </p>
          </div>
          <Project />
        </div>
      </section>

      <section id="two" className="her">
        <div id="projects" className="hero-body">
          <div className="section-heading">
            <p id="header" className="title is-3 has-text-centered">
              {" "}
              Projects{" "}
            </p>
          </div>
          <div>
            <Proj />
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="content is-centered">
          <button id="footer-button" className="button">
            {" "}
            <a className="contact" href="mailto:badangabello@gmail.com">
              Contact Me
            </a>
          </button>
          <p id="footer-para" className="has-text-centered">
            © 2020 BADANGA. All Rights Reserved.{" "}
          </p>
          <p id="footer-para" className="has-text-centered">
            Created by Badanga Ishak Bello
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Page;
