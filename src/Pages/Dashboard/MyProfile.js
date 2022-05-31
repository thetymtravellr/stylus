import { FireIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";
import UpdateProfileModal from "./UpdateProfileModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)

  const { data, isLoading, error, refetch } = useQuery('userProfile', async () => {
    const res = await fetch(`https://agile-atoll-96122.herokuapp.com/user/${user.email}`,{
      method: 'GET',
      headers: {
        'authorization': `bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    return res.json()
  })

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading>Getting Data...</Loading>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <p>something went wrong!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 p-8 mt-24">
      <div className="w-80 text-center">
        <div class="avatar indicator  mx-auto mt-12 ">
         {admin &&  <span class="indicator-item indicator-middle badge border-0" title="admin"><FireIcon className="w-8 border-[1px] p-1 rounded-full text-orange-500 bg-white"/></span>}
          <div class="w-32 h-32 rounded-full">
            <img
              className="w-32 h-32 object-cover rounded-full border-2 border-indigo-500 p-1"
              src={
                data.img ||
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl text-gray-700 font-semibold">
            {data?.name || user.displayName}
          </p>
          <p className="text-gray-400">
            <small>{data?.email}</small>
          </p>
          <label
            htmlFor="updateProfileModal"
            className="btn bg-indigo-500 font-medium mt-4 rounded hover:bg-indigo-600 text-white duration-150"
          >
            Update Profile
          </label>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl text-gray-400 pb-3 font-poppins font-medium border-b-[1px] border-gray-200">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-y-12 mt-12">
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Name</p>
            <h4 className="text-lg">{data?.name || user.displayName}</h4>
          </div>
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Phone</p>
            <h4 className="text-lg">{data?.phone}</h4>
          </div>
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Education</p>
            <h4 className="text-lg">{data?.education}</h4>
          </div>
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Email</p>
            <h4 className="text-md break-words">{data?.email}</h4>
          </div>
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Address</p>
            <h4 className="text-lg">{data?.address}</h4>
          </div>
          <div className="mb-3 md:mb-0">
            <p className="mb-1 md:mb-2 text-gray-400 text-sm font-normal">Linkedin</p>
            <div>
              <h4 className="text-lg">{data?.links}</h4>
            </div>
          </div>
        </div>
      </div>
      <UpdateProfileModal refetch={refetch} id={data?._id} />
    </div>
  );
};

export default MyProfile;
