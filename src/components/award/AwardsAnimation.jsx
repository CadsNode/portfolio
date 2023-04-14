import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "CadsNode.",
    awardFor: "Educational & Simulating platform",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "Vanstation",
    awardFor: "Car e-commerce site",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Wbbv",
    awardFor: "Van marketing site",
    delayAnimation: "400",
  },
  {
    img: "a4",
    awardName: "Car rent",
    awardFor: "Car rental site",
    delayAnimation: "600",
  },
  {
    img: "a5",
    awardName: "Busline",
    awardFor: "Digital marketing site",
    delayAnimation: "800",
  },
  {
    img: "a6",
    awardName: "IntroSpec",
    awardFor: "Blog",
    delayAnimation: "1000",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
