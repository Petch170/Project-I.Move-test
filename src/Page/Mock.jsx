import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Mock = () => {
  // const [getNewImage, setGetNewImage] = useState([]);
  // const [token, setToken] = useState("");
  // const [reload, setReload] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const uploadImage = async (data) => {
  //   try {
  //     const response = await axios.patch(
  //       "http://localhost:8000/user/1/uploads",
  //       data
  //     );
  //     if (response.status === 200 && response.data) {
  //       setGetNewImage([...response.data.data]);
  //     }
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };
  // useEffect(() => {
  //   const getToken = () => {
  //     setToken(window.localStorage.getItem("user"));
  //     console.log("token", token);
  //   };
  //   getToken();
  // }, [reload]);

  const login = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/mock/login",
        data
      );
      if (response.status === 200 && response.data) {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        navigate("/UserHomePage");
        // console.log(localStorage);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.error.message);
    }
  };

  const submitForm = (data) => {
    // const formData = new FormData();
    // formData.append("image", data.image[0]);
    // formData.append("name", data.name);
    // uploadImage(formData);
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    login(data);
    // setToken(window.localStorage.getItem("user"));
    // console.log("token", token);
    // setReload(!reload);
    console.log("data", data);
    console.log("message", message);
    // console.log("formData", formData);
    reset();
  };
  // console.log("getNewImage", getNewImage);

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(submitForm)}
        // encType="multipart/form-data"
      >
        {/* <img
        src="http://localhost:8000/uploads/ed6d78bb-56be-4b6e-a015-4b97b6398eec.jpeg"
        alt=""
      /> */}
        {/* <h1>Upload Picture</h1>
      <input
        type="file"
        name="image"
        {...register("image", {
          required: true,
        })}
      /> */}
        <div className="mb-4">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="block w-full mt-1 rounded-lg p-2 border border-black"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="errorMsg">E-mail is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="block w-full mt-1 rounded-lg p-2 border border-black"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">password is required.</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="text-red-400">{message}</p>}
    </>
  );
};
export default Mock;
