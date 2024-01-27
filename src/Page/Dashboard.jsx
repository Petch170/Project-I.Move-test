import { createContext, useEffect, useState } from "react";
import { NavBar, PieChartComponent, SettingAside, Stat } from "../Component";
import { clearIcon } from "../assets/Icon";
import axios from "axios";

export const customContext = createContext({});
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get("http://localhost:8000/user/1");
      if (response.status === 200 && response.data) {
        console.log("response", response);
        setData([...response.data.data]);
      }
    };
    getUserData();
  }, []);
  console.log(data);
  return (
    <customContext.Provider value={{ data }}>
      <header>
        <NavBar />
      </header>
      <main className="sm:grid sm:grid-cols-3">
        <SettingAside />
        <section className="w-full px-10 sm:col-span-2  sm:border-l-2 sm:border-black sm:pl-10 sm:my-4">
          <div className="my-4 sm:flex sm:flex-row sm:justify-between sm:mt-0">
            <h1 className="text-3xl font-bold underline underline-offset-4 text-center sm:text-2xl sm:text-left sm:no-underline">
              Dashboard
            </h1>
            {/* <div className="mt-4 flex flex-row gap-4 sm:mt-0">
              <label htmlFor="date range">
                choose date range
                <select name="date range" id="date range" className="block">
                  <option value="all">all</option>
                  <option value="week">week</option>
                  <option value="year">year</option>
                </select>
              </label>
              <label htmlFor="activity">
                choose activity
                <select name="activity" id="activity" className="block">
                  <option value="all">all</option>
                  <option value="badminton">badminton</option>
                  <option value="basketball">basketball</option>
                  <option value="swimming">swimming</option>
                  <option value="running">running</option>
                  <option value="walking">walking</option>
                </select>
              </label>
              <div className="sm:hidden">
                <p>clear</p>
                <img src={clearIcon} alt="clearIcon" />
              </div>
            </div> */}
          </div>
          <PieChartComponent />
          <Stat />
        </section>
      </main>
    </customContext.Provider>
  );
};
export default Dashboard;
