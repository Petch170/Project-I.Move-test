import { createContext, useEffect, useState } from "react";
import { NavBar, PieChartComponent, SettingAside, Stat } from "../Component";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const customContext = createContext({});
const Dashboard = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      if (!token) {
        navigate("/login");
      }
      const decode = jwtDecode(token);
      const userId = decode.data.userId;
      const response = await axios.get(
        `https://imoveprojectgroup5.onrender.com/user/activity/${userId}`,
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
        <section className="w-full px-10 sm:col-span-2  sm:border-l-2 sm:border-dark-blue sm:pl-10 sm:my-4">
          <div className="my-4 sm:flex sm:flex-row sm:justify-between sm:mt-0">
            <h1 className="text-3xl font-bold underline underline-offset-4 text-center sm:text-2xl sm:text-left sm:no-underline text-dark-blue">
              Dashboard
            </h1>
          </div>
          <h2 className="text-center mb-2 font-bold text-dark-blue">
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
