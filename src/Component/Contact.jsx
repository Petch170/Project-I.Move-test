import React from "react";
import facebook from "/Pic-home/facebook_3488302.png"
import twiter from '/Pic-home/twitter.png'
import instragram from "/Pic-home/instagram_2111463.png"
import youtube from "/Pic-home/youtube_1384060.png"
const Contact = () => {
  const brand = [
    {
      id: 0,
      name: "facebook",
      logo: facebook,
      url: "#",
    },
    {
      id: 1,
      name: "twitter",
      logo: twiter,
      url: "#",
    },
    {
      id: 2,
      name: "Instragram",
      logo: instragram,
      url: "#",
    },
    {
      id: 3,
      name: "youtube",
      logo: youtube,
      url: "#",
    },
  ];

  return (
  
      <div id="contact" className=" grid grid-cols-1 md:grid-cols-2 justify-evenly mx-[7.5px] md:mx-[30px] ">
        <div className="flex flex-col justify-start text-center md:text-left p-2 md:pl-40 ">
          <h2 className="text-lg md:text-2xl font-semibold text-[#102C57] underline">
            Contact
          </h2>
          <p className="text-wrap text-sm md:text-lg">
            Monday-sunday 9:00-21:00
          </p>
          <p className="text-wrap text-sm md:text-lg">Tel : 012 345 6789</p>
          <div className="brandlink flex items-start p-1 gap-1 justify-center md:justify-start ">
            {brand.map((brand) => (
              <div key={brand.id} className="w-5 ">
                <a href={brand.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="  h-auto hover:cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className=" flex justify-center p-2">
            <iframe
              className=" border-0 w-full md:w-80 h-44"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.4160131817052!2d100.5267266!3d13.7537679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3a19f61fed%3A0xacd8af8b022d88f0!2sSpring%20Tower!5e0!3m2!1sen!2sth!4v1704857486161!5m2!1sen!2sth"
              // width="600"
              // height="450"
              // style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              alt="GoogleMap"
            ></iframe>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
