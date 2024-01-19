import React from "react";

const Aboutus = () => {
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
    <div className=" my-8 mx-[100px]">
      <div>
        <h1 className=" text-center text-wrap font-bold text-3xl">About Us</h1>
        <h2 className=" text-xl text-center p-5">
          <strong>"I.MOVE"</strong> is not just an app but a companion that
          encourages you to lead a strong and healthy lifestyle. <br /> Whether
          you are out for a run or simply taking a leisurely stroll, you are not
          alone. <br />
          We are delighted to make every day of yours an "Active" day, filled
          with satisfaction.
          <br />
          <br />
          Start today and become a part of the <strong>"I.MOVE"</strong>{" "}
          community with us!
        </h2>
      </div>
      <div className="p-12 ">
        <h1 className=" text-center text-2xl font-semibold">Our Dream Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-blue-800 my-0 mx-auto gap-4">
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
              <h3 className="text-lg">{member.name}</h3>
              <p className="text-base">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
