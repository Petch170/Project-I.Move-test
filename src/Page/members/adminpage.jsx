import React, { useState, useEffect } from "react";
import Navbarhome from "../../Component/Navbarhome";
import axios from "axios";

const AdminPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getDataMembers = async () => {
      const res = await axios.get("#");

      // setmember
      if (res.status === 200 && res.data) {
        setMembers([...res.data]);
      }
    };
    getDataMembers();
  }, []);

  return (
    <div>
      <Navbarhome />
      <div className="text-center mt-5 font-bold">Table Data Members</div>
      <div className="flex flex-row justify-center mt-5">
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>E-mail</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {/* <tbody>
                {members.map((member , id) => {

                    // waiting Data from backend

                    return (
                        <tr key={`${member} - ${id}`}>
                            <td>{member.}</td>
                            <td>{member.}</td>
                            <td>{member.}</td>
                            <td>{member.}</td>
                        </tr>
                    )
                })}
            </tbody> */}
        <tbody>
          <tr>
            <td>asdasdas</td>
            <td>asdasdas</td>
            <td>asdasdas</td>
            <td>asdasdas</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminPage;
