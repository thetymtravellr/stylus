import React, { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [user, loading, error] = useAuthState(auth)
  console.log(user)
  const [
    signInWithEmailAndPassword,
    emailUser,
    emailLoading,
    emailError,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmailAndPassword(email,password)
    toast.success('Logged In', { id: "login"})
  };

  const [token] = useToken(user || emailUser?.user);
  
  useEffect(()=>{
    if (token) {
      navigate(from,{ replace: true });
    }
   },[token, from, navigate, user])

  if (loading || emailLoading) {
    return <div className="h-screen grid place-content-center"><Loading>Please Wait..</Loading></div>;
  }

  return (
    <section className="w-full min-h-screen grid place-content-center">
      <h1 className="text-3xl font-semibold text-primary uppercase text-center">
        Login
      </h1>
      <div className="w-full max-w-md mx-auto flex flex-col items-center shadow-md p-10">
        <form
          className="w-full max-w-md mx-auto rounded-md mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6">
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
        max-w-md
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
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            <p className="text-red-500 text-sm">{(errors.email?.type === 'required' && 'email is required') || (emailError?.code === 'auth/user-not-found' && 'user not found')}</p>
          </div>
          <div className="">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control w-full
        max-w-md
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
            <p className="text-red-500 text-sm">{(errors.password?.type === 'required' && 'password is required') || (emailError?.code === 'auth/wrong-password' && 'password is wrong')}</p>
            <p className="text-red-500 text-sm">{errors.password?.type === 'minLength' && 'password must be 6 char or longer'}</p>
          </div>
          <p className="mt-3 mb-1 text-sm font-medium">
            Don't have an account? 
            <Link className="text-blue-500 hover:underline ml-2" to="/register">
            Please Register
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
            Login
          </button>
        </form>
        <div className="divider ">OR</div>
        <p>Continue With</p>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
