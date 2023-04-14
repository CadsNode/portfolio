import React from "react";
import Social from "../Social";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/slider/picWeb4.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Full Stack Developer</p> 
                  <h3>Chinedu Duru</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                  My name is Chinedu Duru and I am a Full stack developer with over 5 years of professional experience.
                  I'm based in Manchester UK and consider myself an expert coder with the ability to build almost 
                  anything that comes to mind. Whether it is to build a machine learning web app, an IoT application,
                  an e-commerce site, or a simple blog; I am up to the task.
                  </p>
                  {/* <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p> */}
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Chinedu Duru</span>
                        </li>
                        {/* <li>
                          <label>Birthday: </label>
                          <span>4th April 1994</span>
                        </li> */}
                        {/* <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li> */}
                        <li>
                          <label>Address: </label>
                          <span>Manchester, UK</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        {/* <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li> */}
                        <li>
                          <label>Email: </label>
                          <span>chinedu.a.duru@gmail.com</span>
                        </li>
                        {/* <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li> */}
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I can build for you?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Live projects</h3>
          </div>

          <Awards />
          {/* End Awards */}

          

        </div>
      </section>
    </>
  );
};

export default About;
