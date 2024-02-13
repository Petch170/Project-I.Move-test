import React, { useState } from "react";

const Accordion = ({ activityCardData, handleEditClick, editButtonShow }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activityCardData);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log(activeIndex);
  };

  return (
    <div className="max-sm">
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {activityCardData.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`${
                  activeIndex === index ? "" : "rounded-b-lg"
                } border-x-2 border-t-2 shadow-lg rounded-tl-lg rounded-tr-lg `}
              >
                {/* CardHeader */}
                <div className=" flex justify-between ">
                  <div className="flex">
                    {item.userDetails?.imagePath ? (
                      <img
                        src={item.userDetails.imagePath}
                        className="w-10 h-10 p-2 "
                      />
                    ) : (
                      <img src="./Pic-home/user-circle-2.svg" alt="user" />
                    )}

                    <span className="pl-2 pt-2 text-[#102C57] font-bold  ">
                      {item.userDetails.fullName}
                    </span>
                  </div>
                  {editButtonShow ? (
                    <span
                      className="material-icons-outlined p-2 z-[1] cursor-pointer"
                      onClick={() => handleEditClick(item)}
                    >
                      edit
                    </span>
                  ) : null}
                </div>
                {/* PicContainer */}
                <div className="w-full h-[220px]">
                  <img className="w-full h-full" src={item.imageUrl} />
                </div>
                {/* Content */}
                <div className="flex justify-between gap-4 p-3 text-center ">
                  <div className="flex gap-2">
                    <span className="material-icons-outlined">
                      sports_gymnastics
                    </span>
                    <p className="text-[20px] text-[#102C57] font-bold">
                      {item.activityName}
                    </p>
                  </div>
                  <div className="cursor-pointer">
                    <span
                      className="material-icons-outlined"
                      onClick={() => toggleAccordion(index)}
                    >
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  activeIndex === index
                    ? "opacity-100 translate-y-0 h-[fit] duration-1000"
                    : "opacity-0 -translate-y-3 h-[0px] -z-[1] duration-1000"
                } `}
              >
                {/* Content in accordion */}
                <div className="grid grid-cols-2 gap-4 p-3  border-x-2 border-b-2 shadow-lg rounded-br-lg rounded-bl-lg text-center ">
                  <div>
                    <p className="text-[#102C57] font-bold">Activity Type</p>
                    <p>{item.activityType}</p>
                  </div>
                  <div>
                    <p className="text-[#102C57] font-bold">Date</p>
                    <p>{item.date}</p>
                  </div>
                  <div>
                    <p className="text-[#102C57] font-bold">Durations</p>
                    <p>
                      {item.durations > 59
                        ? `${(item.durations / 60).toFixed(2)} hr`
                        : `${item.durations} min`}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#102C57] font-bold">Distance</p>
                    <p>{`${item.distance / 1000}km`}</p>
                  </div>
                  <div className="flex flex-col col-span-2 justify-center">
                    <p className="text-[#102C57] font-bold">Description</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
