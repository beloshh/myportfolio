import React from "react";

function Project(props) {
  return (
    <div>
      <nav className="level is-tablet">
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716229/Images/icons8-javascript-48_noetqu.png"
              }
              alt="icon"
            />
            <p className="title is-5">
              <br />
              JAVASCRIPT
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716228/Images/icons8-html-5-48_rexck8.png"
              }
              alt="icon"
            />
            <p className="title is-5">
              <br />
              HTML5
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716227/Images/icons8-css3-48_fbc4zq.png"
              }
              alt="icon"
            />

            <p className="title is-5">
              <br />
              CSS3
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716234/Images/icons8-react-native-48_mynxs3.png"
              }
              alt="icon"
            />
            <p className="title is-5">
              <br />
              REACT
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716230/Images/icons8-google-cloud-platform-48_sdnqwb.png"
              }
              alt="icon"
            />
            <p className="title is-5">
              {" "}
              <br />
              GCP
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716234/Images/icons8-react-native-48_mynxs3.png"
              }
              alt="icon"
            />

            <p className="title is-5">
              {" "}
              <br /> REACT-NATIVE
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1608716226/Images/icons8-git-48_qwpegs.png"
              }
              alt="icon"
            />

            <p className="title is-5">
              {" "}
              <br /> GIT
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Project;
