import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const Mock = () => {
  const [getNewImage, setGetNewImage] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const uploadImage = async (data) => {
    try {
      const response = await axios.patch(
        "http://localhost:8000/user/1/uploads",
        data
      );
      if (response.status === 200 && response.data) {
        setGetNewImage([...response.data.data]);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const submitForm = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    uploadImage(formData);
    console.log("data", data);
    console.log("formData", formData);
    reset();
  };
  console.log("getNewImage", getNewImage);
  return (
    <form
      action=""
      onSubmit={handleSubmit(submitForm)}
      encType="multipart/form-data"
    >
      {/* <img
        src="http://localhost:8000/uploads/ed6d78bb-56be-4b6e-a015-4b97b6398eec.jpeg"
        alt=""
      /> */}
      <h1>Upload Picture</h1>
      <input
        type="file"
        name="image"
        {...register("image", {
          required: true,
        })}
      />
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
      <button type="submit">Submit</button>
    </form>
  );
};
export default Mock;
