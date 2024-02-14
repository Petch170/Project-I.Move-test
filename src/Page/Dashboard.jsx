import { createContext, useEffect, useState } from "react";
import { NavBar, PieChartComponent, SettingAside, Stat } from "../Component";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const customContext = createContext({});
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      const decode = jwtDecode(token);
      const userId = decode.data.userId;
      const response = await axios.get(
        `http://localhost:8000/user/activity/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200 && response.data) {
        setData([...response.data.data]);
      }
    };
    getUserData();
  }, []);

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
          </div>
          <h2 className="text-center mb-2 font-bold">
            Total Activity Time (hr)
          </h2>
          <PieChartComponent />
          <Stat />
        </section>
      </main>
    </customContext.Provider>
  );
};
export default Dashboard;
