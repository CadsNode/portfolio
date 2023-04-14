import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    image: "img/slider/ecommerce.png",
    title: "E-commerce",
    descriptions: `I can build a money making site for your business. 
    I have the experience to stylishly put your products online 
    matched with effective payment portals and different methods of authentication.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    image: "img/slider/social-media.png",
    title: "Social media",
    descriptions: `Have a social media idea? I would love to hear it. I have the
    ability to take a conceptual idea and make it into reality for all to experience
    and interact with.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    image: "img/slider/iot.png",
    title: "IoT",
    descriptions: `Using various technologies, I can build 
    applications to help you visualize data and control devices remotely over the web.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-mobile",
    image: "img/slider/blog.png",
    title: "Blog & CMS",
    descriptions: `Need a simple blog or content management system?
     I have years of experience building these services for clients big or small.`,
    delayAnimation: "400",
  },

  {
    icon: "icon-desktop",
    image: "img/slider/online.png",
    title: "Educational marketplace",
    descriptions: `Want to educate others and get paid for it? Want to establish an 
    educational platform for your customers to interact with and get empowered from? 
    I know exactly what you need for this avenue of service.`,
    delayAnimation: "400",
  },

  {
    icon: "icon-target",
    image: "img/slider/other.png",
    title: "Other",
    descriptions: `I would love to hear the ideas you would to like come to reality.
    Whether it is an existing or non-existing concept, we can discuss to help others 
    experience what you have in mind.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01"
            
            // style={{
            //   backgroundImage: `url(${
            //     // process.env.PUBLIC_URL + "img/slider/picWeb.png" 
            //   })`,
            // }}

            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + val.image})`,
            }}

            >
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
