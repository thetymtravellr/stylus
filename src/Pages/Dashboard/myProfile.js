import { FireIcon, PencilAltIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [updateProfile, setUpdateProfile] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(undefined);
  const imgKey = "4d471a7e2f7462552fd9d5a90acb5729";
  const [loading,setLoading] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(
    "userProfile",
    async () => {
      const res = await fetch(
        `https://blooming-sierra-55430.herokuapp.com/user/${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.json();
    }
  );

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    // setFileName(event.target.files[0].name.slice(0, 20));
  };

  const resetForm = (e) => {
    setFile(undefined);
    setUpdateProfile(false);
    reset();
    document.getElementById("updateForm").reset();
  };

  const onSubmit = (data) => {
    setLoading(true)
    const image = data.file[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        
        if (result.success) {
          const img = result.data.url;
          const userInfo = {
            address: data.address,
            education: data.education,
            img: img,
            links: data.links,
            name: data.name,
            phone: data.phone,
          };
          fetch(
            `http://localhost:8080/user/update/${user?.email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(userInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                setFile(undefined);
                reset();
                setUpdateProfile(false);
                setLoading(false)
                refetch();
              }
            });
        }
      });
  };

  if (isLoading || loading) {
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

  const placeholder =
    "https://scalingupnutrition.org/wp-content/uploads/2020/10/user-placeholder.png";

  return (
    <>
      <section className="min-h-screen flex items-center justify-center md:mt-0 mt-12">
        <div>
          {updateProfile ? (
            <form
              id="updateForm"
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-6xl mx-auto"
            >
              <h1 className="mb-8 text-2xl">Update Profile</h1>
              <div className="w-full">
                <div className="flex lg:flex-row flex-col items-start lg:space-x-10 ">
                  <div className="w-60">
                    <div className="">
                      <p className="font-bold mb-1">Profile Picture</p>
                      <div className=" flex items-center  space-x-2 w-fit">
                        <div className="relative">
                          <input
                            type="file"
                            id="photo"
                            className="border h-[1px] w-[1px] absolute z-10"
                            {...register("file")}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="photo"
                            className="z-20 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-primary  focus:outline-none  focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-800 transition duration-150 ease-in-out cursor-pointer"
                          >
                            <img
                              className="w-52 h-52 object-cover"
                              src={file ? file : (data.img || placeholder)}
                              alt="img"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-3xl flex sm:space-x-16 space-y-6 sm:space-y-0 sm:flex-row flex-col">
                    <div className="flex flex-col space-y-6">
                      <div className="">
                        <p className="font-bold mb-1">Name:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary px-2"
                            type="text"
                            {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Email:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary px-2"
                            type="email"
                            {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Address:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary px-2"
                            type="text"
                            {...register("address")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                      <div className="">
                        <p className="font-bold mb-1">Phone:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary px-2"
                            type="number"
                            {...register("phone")}
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Education:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary"
                            type="text"
                            {...register("education")}
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Links:</p>
                        <div>
                          <input
                            className="w-full md:w-80 border rounded h-10 outline-primary"
                            type="text"
                            {...register("links")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="flex justify-center md:justify-start space-x-4 mt-12 md:mt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-ghost py-2 px-6 rounded border border-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-purple-700 hover:bg-primary text-white py-2 px-6 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h1 className="mb-8 text-2xl">Profile</h1>
              <div className="w-full">
                <div className="flex items-start space-x-10">
                  <div className="w-80">
                    <div className="avatar indicator ">
                      {admin && (
                        <span
                          className="indicator-item indicator-middle badge border-0"
                          title="admin"
                        >
                          <FireIcon className="w-8 border-[1px] p-1 rounded-full text-orange-500 bg-white" />
                        </span>
                      )}
                      <div className="w-52 h-52">
                        <img
                          className="w-52 h-full object-cover"
                          src={data.img || placeholder}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-16 w-full max-w-md">
                    <div className="flex flex-col space-y-6">
                      <div className="">
                        <p className="font-bold mb-1">Name:</p>
                        <p className="font-light">{data.name}</p>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Email:</p>
                        <p className="font-light">{data.email}</p>
                      </div>

                      <div className="">
                        <p className="font-bold mb-1">Address:</p>
                        <p className="font-light">{data.address}</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                      <div className="">
                        <p className="font-bold mb-1">Phone:</p>
                        <p className="font-light">{data.phone}</p>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Education:</p>
                        <p className="font-light">{data.name}</p>
                      </div>
                      <div className="">
                        <p className="font-bold mb-1">Links:</p>
                        <p className="font-light">{data.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setUpdateProfile(true)}
                  className="btn bg-purple-700 hover:bg-primary text-white py-2 px-6 rounded flex items-center"
                >
                  Edit Profile <PencilAltIcon className="w-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyProfile;
