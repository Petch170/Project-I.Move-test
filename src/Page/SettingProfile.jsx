import { useForm } from "react-hook-form";
import { userImage } from "../assets/Picture";
import { pencilIcon } from "../assets/Icon";
import { HeaderMobile, NavBar, SettingAside } from "../Component";
import { useEffect, useState } from "react";
import axios from "axios";

const SettingProfile = () => {
  // const [getNewProfile, setGetNewProfile] = useState([]);
  // const [imageName, setImageName] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [reload, setReload] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/user/info/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200 && response.data) {
        setUserInfo([...response.data.data]);
        // console.log("userInfo", userInfo);
      }
    };
    getUserInfo();
  }, [reload]);

  const editProfile = async (data) => {
    const response = await axios.patch(
      `http://localhost:8000/user/editProfile/${userId}`,
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response.status === 200 && response.data) {
      // setGetNewProfile([...response.data.data]);
      // console.log("getNewProfile", getNewProfile);
      setReload(!reload);
    }
  };

  const submitForm = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("image", data.image[0]);
    editProfile(formData);
    console.log("data", data);
    console.log("image", data.image[0]);
    // setImageName("");
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
        <section className="w-screen px-10 sm:w-fit">
          <div className="sm:border-l-2 sm:border-black sm:pl-10">
            <h2 className="text-2xl font-bold my-4">Edit Profile</h2>
            <form
              action=""
              onSubmit={handleSubmit(submitForm)}
              encType="multipart/form-data"
            >
              {/* mobile */}
              <div className="sm:hidden flex justify-end mt-6 relative">
                <input
                  type="file"
                  name="image"
                  id="image-mobile"
                  accept=".png, .jpg, .jpeg"
                  className="inputfile"
                  {...register("image", {
                    required: true,
                  })}
                  // onChange={(e) => {
                  //   setImageName(e.target.files[0].name);
                  //   setImage(URL.createObjectURL(e.target.files[0]));
                  // }}
                />
                <label htmlFor="image-mobile">
                  <img
                    src={
                      userInfo[0]?.imagePath !== ""
                        ? userInfo[0]?.imagePath
                        : userImage
                    }
                    alt="user image"
                    className="object-cover aspect-square rounded-full max-w-[60px]"
                  />
                  <img
                    src={pencilIcon}
                    alt="pencilIcon"
                    className="absolute bottom-[2px] right-[7px]"
                  />
                </label>
              </div>
              <div className="flex gap-10 items-center desktop mb-4">
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
                    // onChange={(e) => {
                    //   setImageName(e.target.files[0].name);
                    //   setImage(URL.createObjectURL(e.target.files[0]));
                    // }}
                  />
                  <label
                    htmlFor="image"
                    className="btn flex justify-center items-center cursor-pointer text-xs"
                  >
                    Change Picture (PNG,JPG)
                  </label>
                  {/* {imageName ? (
                    <div className="text-xs text-center mt-2">{imageName}</div>
                  ) : (
                    <div></div>
                  )} */}
                  {/* <button className="btn">Delete Picture</button> */}
                </div>
                <div>
                  <img
                    src={
                      userInfo[0]?.imagePath !== ""
                        ? userInfo[0]?.imagePath
                        : userImage
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
                  })}
                />
                {errors.phoneNumber?.type === "required" && (
                  <p className="errorMsg">Phone number is required.</p>
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
