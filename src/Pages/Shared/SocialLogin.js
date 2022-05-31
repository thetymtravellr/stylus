import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../Assets/Icons/google.png";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "./Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth)

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser?.user)

  useEffect(()=>{
    if (token) {
      navigate(from, { replace: true });
    }
  },[token,navigate,from])

  if(gLoading){
    return <div><Loading></Loading></div>
  }

  return (
    <div className="mt-2 flex space-x-6">
      <button
        onClick={() => signInWithGoogle()}
        className="border-[1px] p-2 rounded-md hover:bg-gray-100 duration-200 active:bg-gray-200 active:scale-95"
      >
        <img className="w-10" src={googleIcon} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
