import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(undefined);
  const [fileName, setFileName] = useState("");
  const imgKey = "4d471a7e2f7462552fd9d5a90acb5729";

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name.slice(0, 20));
  };

  const onProductSubmit = (data) => {
    setLoading(true);
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
          const product = {
            productName: data.productName,
            price: data.price,
            quantity: data.quantity,
            minimum: data.minimum,
            supplierName: data.supplierName,
            supplierEmail: data.supplierEmail,
            description: data.description,
            img: img,
          };
          fetch(`https://agile-atoll-96122.herokuapp.com/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setFile(undefined);
                setFileName("");
                setLoading(false);
                reset();
              }
            });
        }
      });
  };

  if (loading) {
    return (
      <div className="w-full h-full grid place-content-center">
        <Loading>Adding Product...</Loading>
      </div>
    );
  }

  return (
    <div className="mt-24">
      <div>
        <h1 className="text-2xl text-center">Add Product</h1>
        <form
          id="productAddForm"
          className="w-full max-w-xl mx-auto px-4 md:px-0 rounded-md mt-8 mb-4"
          onSubmit={handleSubmit(onProductSubmit)}
        >
          <div className="my-4 flex items-center space-x-2 w-fit md:mx-0 mx-auto">
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
          <div
            className="mb-6 w-full
        max-w-xl md:mx-0
        mx-auto"
          >
            <label
              htmlFor="productName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Name
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
              id="productName"
              placeholder="Enter Product Name"
              {...register("productName", { required: true })}
            />
          </div>
          <div className="flex flex-wrap justify-between w-full max-w-xl">
            <div className="mb-6">
              <label
                htmlFor="price"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                className="form-control
                w-20
                sm:w-32
                md:w-40
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
                id="price"
                placeholder="price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                className="form-control
                w-20
                sm:w-32
                md:w-40
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
                id="quantity"
                placeholder="quantity"
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="minimum"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Min Value
              </label>
              <input
                type="number"
                className="form-control
                w-20
                sm:w-32
                md:w-40
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
                id="minimum"
                placeholder="minimum"
                {...register("minimum", { required: true })}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:justify-between w-full max-w-xl">
            <div className="mb-6 w-full md:w-2/4">
              <label
                htmlFor="supplierName"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Supplier Name
              </label>
              <input
                type="text"
                className="form-control
                w-full
                md:w-60
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
                id="supplierName"
                placeholder="supplierName"
                {...register("supplierName", { required: true })}
              />
            </div>
            <div className="mb-6 w-full md:w-2/4">
              <label
                htmlFor="supplierEmail"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Supplier Email
              </label>
              <input
                type="text"
                className="form-control
                w-full
                md:w-72
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
                id="supplierEmail"
                placeholder="supplierEmail"
                {...register("supplierEmail", { required: true })}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="description"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="textarea border border-solid border-gray-300 w-full h-32"
              placeholder="Description"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="
            btn px-8 bg-indigo-500 hover:bg-indigo-600 font-medium mt-4 rounded text-white duration-150"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
