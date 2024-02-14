import { useForm } from "react-hook-form";
import { HeaderMobile, NavBar, SettingAside } from "../Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const SettingProfile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [reload, setReload] = useState(false);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  const userId = decode.data.userId;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/info/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.status === 200 && response.data) {
          return {
            name: response.data.data[0]?.fullName,
            email: response.data.data[0]?.email,
            phoneNumber: response.data.data[0]?.phoneNumber,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/user/info/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200 && response.data) {
        setUserInfo([...response.data.data]);
      }
    };
    getUserInfo();
  }, [reload]);

  const editProfile = async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200 && response.data) {
        setReload(!reload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("image", data.image[0]);
    editProfile(formData);
    setMessage("Profile editing is successful");
  };

  return (
    <>
      <header>
        <NavBar />
        <HeaderMobile />
      </header>
      <main className="sm:grid sm:grid-cols-3">
        <SettingAside />
        <section className="w-screen px-10 sm:w-fit">
          <div className="sm:border-l-2 sm:border-black sm:pl-10">
            <h2 className="text-2xl font-bold my-4">Edit Profile</h2>
            {message && (
              <p className="font-bold text-green-600 mb-4">{message}</p>
            )}
            <form
              action=""
              onSubmit={handleSubmit(submitForm)}
              encType="multipart/form-data"
            >
              <div className="flex gap-10 items-center mb-4">
                <div>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    className="inputfile"
                    {...register("image", {
                      required: true,
                    })}
                  />
                  <label
                    htmlFor="image"
                    className="btn flex justify-center items-center cursor-pointer text-xs"
                  >
                    Change Picture (PNG,JPG)
                  </label>
                  {errors.image?.type === "required" && (
                    <p className="errorMsg">Picture file is required.</p>
                  )}
                </div>
                <div>
                  <img
                    src={
                      userInfo[0]?.imagePath
                        ? userInfo[0]?.imagePath
                        : "/Pic-home/user-circle-2.svg"
                    }
                    alt="user image"
                    className="object-cover aspect-square rounded-full max-w-[150px]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name?.type === "required" && (
                  <p className="errorMsg">Name is required.</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="errorMsg">E-mail is required.</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="errorMsg">E-mail is not valid.</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                  })}
                />
                {errors.phoneNumber?.type === "required" && (
                  <p className="errorMsg">Phone number is required.</p>
                )}
                {errors.phoneNumber?.type === "pattern" && (
                  <p className="errorMsg">
                    Phone number pattern is 000-000-0000.
                  </p>
                )}
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
export default SettingProfile;
