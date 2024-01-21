import { useForm } from "react-hook-form";
import { HeaderMobile, NavBar, SettingAside } from "../Component";

const SettingPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitForm = (data) => {
    // console.log(data);
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
              <div className="mb-4">
                <label htmlFor="currentPassword">Current password</label>
                <input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  placeholder="Your current password"
                  className="block w-full w-min-[350px] mt-1 rounded-lg p-2 border border-black"
                  {...register("currentPassword", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.currentPassword?.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                )}
                {errors.currentPassword?.type === "minLength" && (
                  <p className="errorMsg">
                    Password should be at least 6 characters.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword">New password</label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Your new password"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("newPassword", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.newPassword?.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                )}
                {errors.newPassword?.type === "minLength" && (
                  <p className="errorMsg">
                    Password should be at least 6 characters.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="retypePassword">Re-type Password</label>
                <input
                  type="password"
                  name="retypePassword"
                  id="retypePassword"
                  placeholder="Re-type your password"
                  className="block w-full mt-1 rounded-lg p-2 border border-black"
                  {...register("retypePassword", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.retypePassword?.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                )}
                {errors.retypePassword?.type === "minLength" && (
                  <p className="errorMsg">
                    Password should be at least 6 characters.
                  </p>
                )}
              </div>
              <div className="flex justify-center sm:justify-end">
                <button type="submit" className="btn mt-2">
                  Save password
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
