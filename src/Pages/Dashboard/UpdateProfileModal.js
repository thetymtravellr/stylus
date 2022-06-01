import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import auth from "../../firebase.init";

const UpdateProfileModal = ({ refetch }) => {

  const [user] = useAuthState(auth)
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(undefined);
  const [fileName, setFileName] = useState("");
  const imgKey = "4d471a7e2f7462552fd9d5a90acb5729";

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name.slice(0, 20));
  };

  const resetForm = (e) => {
    setFile(undefined);
    setFileName("");
    document.getElementById("updateForm").reset();
  };

  const onSubmit = (data) => {
    
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

          fetch(`https://blooming-sierra-55430.herokuapp.com/update/${user?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.acknowledged){
                setFile(undefined)
                reset()
                setIsOpen(true)
                refetch()
              }
            });
        }
      });
  };

  return (
    <div className="">
      <input
        type="checkbox"
        id="updateProfileModal"
        className="modal-toggle "
      />
      <div className="modal modal-bottom sm:modal-middle bg-white md:ml-80 md:mt-20">
        <div className="modal-box relative h-fit md:max-h-[75vh]">
          <label
            htmlFor="updateProfileModal"
            onClick={resetForm}
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-black hover:text-white"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">Update Profile</h3>
          <form
            id="updateForm"
            className="w-full max-w-md mx-auto rounded-md mt-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="my-4 flex items-center space-x-2 w-fit">
              <img
                className="w-10 h-10 object-cover"
                src={
                  file
                    ? file
                    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                }
                alt="img"
              />

              <div className="relative">
                <input
                  type="file"
                  id="photo"
                  className="border h-[1px] w-[1px] absolute z-10"
                  {...register("file", { required: true })}
                  onChange={handleChange}
                />
                <label
                  htmlFor="photo"
                  className="z-20 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-primary hover:border-indigo-300 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-800 transition duration-150 ease-in-out"
                >
                  Upload Photo
                </label>
              </div>
              <p>{fileName ? fileName : "No File Chosen"}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="education"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Education
              </label>
              <input
                type="text"
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="education"
                aria-describedby="emailHelp"
                placeholder="Enter Education"
                {...register("education", { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="phone"
                placeholder="Enter Phone"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="address"
                placeholder="Enter Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="">
              <label
                htmlFor="links"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Links
              </label>
              <input
                type="text"
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="links"
                placeholder="Linked Link"
                {...register("links", { required: true })}
              />
            </div>
            <div className="flex justify-center space-x-2">
              <button
                type="submit"
                className="
            btn bg-indigo-500 hover:bg-indigo-600 font-medium mt-4 rounded text-white duration-150"
              >
                Update
              </button>
              <label
                htmlFor="updateProfileModal"
                onClick={resetForm}
                className="btn bg-black hover:bg-gray-800 font-medium mt-4 rounded text-white duration-150"
              >
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="reactModal"
      >
       <div className="w-full h-full grid place-content-center relative">
         <button className="absolute top-2 right-2 bg-indigo-500 rounded-lg hover:bg-indigo-600" onClick={closeModal}><XIcon className="w-10 text-white p-2"/></button>
         <p>Profile Updated Successfully</p>
       </div>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;