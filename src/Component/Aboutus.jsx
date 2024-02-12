
import samoy from "/Pic-home/samoy.jpg"

const Aboutus = () => {
  const data = [
    {
      id: 0,
      image: samoy,
      name: "Sojirat",
      position: "Web Developers",
    },
    {
      id: 1,
      image: samoy,
      name: "Wiphaphorn",
      position: "Web Developers",
    },
    {
      id: 2,
      image: samoy,
      name: "Cheartsak",
      position: "Web Developers",
    },
    {
      id: 3,
      image: samoy,
      name: "Jetsalit",
      position: "Web Developers",
    },
  ];

  return (
    <div id="aboutus" className=" mx-[7.5px] md:mx-[30px]">
      <div >
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
      <div className="pt-10 py-5 ">
        <h1 className=" text-center text-lg md:text-2xl font-semibold text-[#102C57] underline pb-3">
          Our Dream Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:px-28">
          {data.map((member) => (
            <div
              key={member.id}
              className=" py-2 px-5 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className=" w-[150px]  h-[200px]"
              />
              <h3 className="text-base md:text-lg">{member.name}</h3>
              <p className="text-sm md:text-base">
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
