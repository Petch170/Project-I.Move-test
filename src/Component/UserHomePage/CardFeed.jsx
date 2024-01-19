import React from "react";
import Accordion from "./Accordion";
import { mockActivity } from "./mockData";
export default function CardFeed() {
  return (
    <div className="col-span-9 p-3 m-5 ">
      <div>
        <h1 className="text-[36px] text-[#102C57] font-bold">Home</h1>
        <h2 className="text-[24px] text-[#102C57] font-bold pb-2">
          Latest Activity
        </h2>
      </div>
      <div>
        <Accordion activityCardData={mockActivity} />
      </div>
    </div>
  );
}
