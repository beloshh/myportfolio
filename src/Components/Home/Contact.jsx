import React from "react";

function Contact(props) {
  return (
    <div>
      <div id="button-space" className="field has-addons">
        <p className="control">
          <button id="super" className="button is-small">
            <a href="https://github.com/beloshh">
              <figure className="image is-24x24">
                <img
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716228/Images/icons8-github-26_ymrxjo.png"
                  }
                  alt="pages"
                />
              </figure>
            </a>
          </button>
        </p>
        <p className="control">
          <button id="super" className="button is-small">
            <a href="https://twitter.com/beloshh">
              <figure className="image is-24x24">
                <img
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716229/Images/icons8-twitter-24_lvcrkb.png"
                  }
                  alt="pages"
                />
              </figure>
            </a>
          </button>
        </p>
        <p className="control">
          <button id="super" className="button is-small">
            <a href="https://www.linkedin.com/in/badanga-ishak-4786b215b">
              <figure className="image is-24x24">
                <img
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716229/Images/icons8-linkedin-2-32_frzzci.png"
                  }
                  alt="pages"
                />
              </figure>
            </a>
          </button>
        </p>
        <p className="control">
          <button id="super" className="button is-small ">
            <a href="https://drive.google.com/file/d/1mc7Z0zW0E3PFeLQSaUdMHDkWy9rcbbTj/view?usp=sharing">
              <figure className="image is-24x24">
                <img
                  src={
                    "https://res.cloudinary.com/badanga/image/upload/v1608716227/Images/icons8-download-resume-50_ahldkw.png"
                  }
                  alt="pages"
                />
              </figure>
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Contact;
