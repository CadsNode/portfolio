import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "React",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "Ui/Ux",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
  {
    name: "MongoDB",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "MySQL",
    numberPercent: "73",
    startCount: "0",
    endCount: "73",
  },
  {
    name: "Nodejs/Express",
    numberPercent: "94",
    startCount: "0",
    endCount: "94",
  },
  {
    name: "Python",
    numberPercent: "55",
    startCount: "0",
    endCount: "55",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
