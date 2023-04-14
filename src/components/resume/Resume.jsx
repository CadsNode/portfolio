import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Fullstack developer`,
    jobType: `In office`,
    jobDuration: `Sep 2022 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "uPower",
    jobDescription: `Work in a team of 5 to develop company's Energy
    Management System (EMS). Role focuses on building dashboard to 
    incorporate IoT energy monitoring devices deployed at 
   customer's site. Requires to be proficient in MERN stack technologies
   and other various software tools such as AWS and Python.
    
    `,
  },
  {
    jobPosition: `Fullstack developer`,
    jobType: `Freelance | Remote`,
    jobDuration: `May 2022 - Sep 2022`,
    timeDuraton: `Full Time`,
    compnayName: "uRoutine",
    jobDescription: `Worked with an entrepreneur to build a social media platform.
    Built app with MERN stack technologies and AWS. Created and established
    the models for the MongoDB database from scratch, and built various algorithms 
    with JavaScript to showcase events such timestamps, notifications, follow requests, 
    likes, comments, and other essential functions needed to make the app what it is.
      `,
  },
  {
    jobPosition: `React Developer`,
    jobType: `Remote`,
    jobDuration: `Nov 2021 - May 2022`,
    timeDuraton: `Full Time`,
    compnayName: "Chrysalis",
    jobDescription: ` Was part of a 4 man team to redesign company’s finance app 
    of which my main role was to write APIs to fetch data from a SQL database and display 
    the data with style on a react frontend. As a senior member of the team, I was also 
    involved in mentoring junior developers to get tasks done on time.
    
    `,
  },

  {
    jobPosition: `Lead Software Developer`,
    jobType: `In office`,
    jobDuration: `Nov 2020 - Nov 2021`,
    timeDuraton: `Full Time`,
    compnayName: "WBBV",
    jobDescription: ` Was part of a 4 man team to redesign company’s finance app 
    of which my main role was to write APIs to fetch data from a SQL database and display 
    the data with style on a react frontend. As a senior member of the team, I was also 
    involved in mentoring junior developers to get tasks done on time.
    
    `,
  },
];

const educatonContent = [
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in Horriblensess",
    instituteName: "University Of Evil Doing",
  },
  {
    passingYear: "2013-2016",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "World University",
  },
  {
    passingYear: "2010-2012",
    degreeTitle: "Graphic Artist Training ",
    instituteName: "Graphic Master Institute",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
