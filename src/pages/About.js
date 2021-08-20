import React from "react";

function About() {
  return (
    <>
      <div className="about">
        <div className="about_content">
          <span>Ready to start?</span>

          <div className="about_mail">
            <span className="email">
              <input type="text" placeholder="E-Mail" />
            </span>
            <span className="buttonss">
              <button>send request</button>
            </span>
          </div>
        </div>

        <div className="about_bottom">
          <div className="left">
            <div className="point">
              <div className="line">
                <span>About</span>
              </div>
              <div className="liness">
                <p>Team</p>
              </div>
            </div>
            <div className="point">
              <div className="line">
                <span>Services</span>
              </div>
              <div className="liness">
                <p>
                  Architechtrual
                  <br /> Expediting <br />
                  Consultant
                </p>
              </div>
            </div>
            <div className="point">
              <div className="line">
                <span>Project</span>
              </div>
              <div className="liness">
                <p>
                  Single Family <br /> Multi Family <br />
                  Mixed Use
                  <br /> Resturant
                  <br /> Hospitatilty
                </p>
              </div>
            </div>
            <div className="point">
              <div className="line">
                <span>Blog</span>
              </div>
              <div className="liness">
                <p>
                  News <br />
                  Case Studies <br />
                  Interviews
                </p>
              </div>
            </div>
            <div className="point">
              <div className="line">
                <span>Contact</span>
              </div>
              <div className="liness">
                <p>
                  Careers <br />
                  Publications
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="copyright">
              <span>Icon</span>
            </div>
            <div className="copyrightss">
              <p>
                Copyright 2020
                <br /> Geens Group <br /> All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
