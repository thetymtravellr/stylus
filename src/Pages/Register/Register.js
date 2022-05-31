import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    await sendEmailVerification();
    toast.success('Email Sent', { id: 'verification email'})
  };

  const [token] = useToken(user || emailUser?.user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  

  if (emailLoading || updating) {
    return (
      <div className="h-screen grid place-content-center">
        <Loading>Logging User</Loading>
      </div>
    );
  }

  return (
    <section className=" min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-semibold text-primary uppercase text-center">
          Register
        </h1>
        <div className="w-full max-w-md mx-auto flex flex-col items-center shadow-md p-10">
          <form
            className="w-full max-w-lg mx-auto rounded-md mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
                className="mb-4 w-full max-w-md mx-auto"
              >
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
            </div>
            <div
                className="mb-4 w-full max-w-md mx-auto"
              >
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control
              w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              <p className="text-red-500 text-sm">{(errors.email?.type === 'required' && 'email is required') || (emailError?.code === 'auth/email-already-in-use' && 'email already in use')}</p>
            </div>
            <div
                className="mb-4 w-full max-w-md mx-auto"
              >
              <label
                htmlFor="exampleInputPassword1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control  w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                id="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              <p className="text-red-500 text-sm">{errors.password?.type === 'minLength' && 'password must be 6 char or longer'}</p>
            </div>
            <p className="mt-3 mb-1 text-sm font-medium">
              Already have a account?
              <Link className="text-teal-500 hover:underline ml-2" to="/login">
                Please Login
              </Link>
            </p>
            <button
              type="submit"
              className="
      px-6
      py-2.5
      bg-indigo-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-600 hover:shadow-lg
      focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-500 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Register
            </button>
          </form>
          <div className="divider ">OR</div>
          <p>Continue With</p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Register;
