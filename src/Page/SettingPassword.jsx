import { useForm } from "react-hook-form";
import { HeaderMobile, NavBar, SettingAside } from "../Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";

const SettingPassword = () => {
  const [message, setMessage] = useState("");
  let password;

  const formSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    retypePassword: Yup.string()
      .required("Re-type Password is required")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("newPassword")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
  password = watch("newPassword", "");

  const changePassword = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const decode = jwtDecode(token);
      const userId = decode.data.userId;
      const response = await axios.post(
        `http://localhost:8000/user/changePassword/${userId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200 && response.data) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (data) => {
    changePassword(data);
    setMessage("Password changing is successful");
    reset();
  };

  return (
    <>
      <header>
        <NavBar />
        <HeaderMobile />
      </header>
      <main className="sm:grid sm:grid-cols-3">
        <SettingAside />
        <section className="w-full px-10 sm:max-w-[400px]">
          <div className="sm:border-l-2 sm:border-black sm:pl-10 sm:my-4 ">
            <form action="" onSubmit={handleSubmit(submitForm)}>
              <h2 className="text-2xl font-bold text-center mb-4 sm:text-left">
                Password
              </h2>
              {message && (
                <p className="font-bold text-green-600 mb-4">{message}</p>
              )}

              <div className="mb-4">
                <label htmlFor="newPassword">New password</label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Your new password"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("newPassword")}
                />
                <p className="errorMsg">{errors.newPassword?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="retypePassword">Re-type Password</label>
                <input
                  type="password"
                  name="retypePassword"
                  id="retypePassword"
                  placeholder="Re-type your password"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("retypePassword")}
                />
                <p className="errorMsg">{errors.retypePassword?.message}</p>
              </div>

              <div className="flex justify-center sm:justify-end">
                <button type="submit" className="btn mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default SettingPassword;
