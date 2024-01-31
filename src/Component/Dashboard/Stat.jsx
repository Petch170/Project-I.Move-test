import { useContext } from "react";
import { customContext } from "../../Page/Dashboard";
import { getStatData } from "../../Data/dashboardData";

const Stat = () => {
  // const mockData = [
  //   { id: 1, time: 15, distance: 150, label: "swimming" },
  //   { id: 2, time: 20, distance: 200, label: "walking" },
  //   { id: 3, time: 40, distance: 400, label: "badminton" },
  //   { id: 4, time: 30, distance: 300, label: "cycling" },
  //   { id: 5, time: 10, distance: 100, label: "running" },
  // ];
  
  const { data } = useContext(customContext);
  const totalTime = getStatData(data)
    .map((activity) => activity.time)
    .reduce((total, value) => total + value, 0);
  const totalDistance = getStatData(data)
    .map((activity) => activity.distance)
    .reduce((total, value) => total + value, 0);
  return (
    <div className="flex flex-col gap-6 my-4 sm:flex sm:flex-row sm:justify-center sm:gap-8">
      <div className="flex flex-col justify-center items-center border-2 border-black rounded-lg py-4 sm:px-10">
        <p className="underline underline-offset-4">Total Time</p>
        <p className="text-3xl bold mt-2">{totalTime} hr</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-black rounded-lg py-4 sm:px-10">
        <p className="underline underline-offset-4">Total Distance</p>
        <p className="text-3xl bold mt-2">{totalDistance} km</p>
      </div>
    </div>
  );
};
export default Stat;
