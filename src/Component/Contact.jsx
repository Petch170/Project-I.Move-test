import React from "react";

const Contact = () => {
  const brand = [
    { id: 0, name: "facebook", logo: "Picture/facebook_3488302.png", url: "#" },
    { id: 1, name: "twitter", logo: "Picture/twitter_5968830.png", url: "#" },
    {
      id: 2,
      name: "Instragram",
      logo: "Picture/instagram_2111463.png",
      url: "#",
    },
    { id: 3, name: "youtube", logo: "Picture/youtube_1384060.png", url: "#" },
  ];

  return (
    <div className=" flex justify-evenly  pt-6 pb-6 border-black border">
      <div className="flex flex-col justify-center">
        <h2 className=" font-medium text-2xl">Contact</h2>
        <p>Monday-sunday 9:00-21:00</p>
        <p>Tel : 012 345 6789</p>
        <div className="brandlink flex items-start p-1 gap-1">
          {brand.map((brand) => (
            <div key={brand.id} className="w-5 ">
              <a href={brand.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className=" w-full h-auto hover:cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <iframe className=" border-0 w-80 h-44"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.4160131817052!2d100.5267266!3d13.7537679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3a19f61fed%3A0xacd8af8b022d88f0!2sSpring%20Tower!5e0!3m2!1sen!2sth!4v1704857486161!5m2!1sen!2sth"
            // width="600"
            // height="450"
            // style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            alt='GoogleMap'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
