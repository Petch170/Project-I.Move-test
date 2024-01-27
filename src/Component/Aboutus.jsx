import React from "react";

const Aboutus = ({ liref }) => {
  const data = [
    {
      id: 0,
      image: "/Picture/swim.jpg",
      name: "petch",
      position: "Web Developers",
    },
    {
      id: 1,
      image: "/Picture/swim.jpg",
      name: "nan",
      position: "Web Developers",
    },
    {
      id: 2,
      image: "/Picture/swim.jpg",
      name: "boy",
      position: "Web Developers",
    },
    {
      id: 3,
      image: "/Picture/swim.jpg",
      name: "jane",
      position: "Web Developers",
    },
  ];

  return (
    <div className=" m-[7.5px] md:m-[30px]">
      <div ref={liref} className="border border-bl">
        <h1 className="text-center text-lg md:text-2xl font-semibold text-[#102C57] underline py-3">
          About Us
        </h1>
        <p className="text-wrap text-sm md:text-lg text-center">
          <strong className="text-[#102C57]">"I.MOVE"</strong> is not just an
          app but a companion that encourages you to lead a strong and healthy
          lifestyle.{" "}
          <p>
            {" "}
            Whether you are out for a run or simply taking a leisurely stroll,
            you are not alone.{" "}
          </p>
          <p>
            We are delighted to make every day of yours an "Active" day, filled
            with satisfaction.
          </p>
          <br />
          Start today and become a part of the{" "}
          <strong className="text-[#102C57]">"I.MOVE"</strong> community with
          us!
        </p>
      </div>
      <div className=" py-10 ">
        <h1 className=" text-center text-lg md:text-2xl font-semibold text-[#102C57] underline pb-3">
          Our Dream Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-blue-800 gap-5">
          {data.map((member) => (
            <div
              key={member.id}
              className="border border-gray p-2 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className=" w-full h-auto"
              />
              <h3 className="text-lg md:text-xl">{member.name}</h3>
              <p className="text-sm md:text-lg">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
