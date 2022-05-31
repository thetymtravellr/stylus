import { ExclamationIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Loading from "../Pages/Shared/Loading";

export default function Modal({ id, refetch }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCancelOrder = () => {
    setIsLoading(true);
    const url = `https://agile-atoll-96122.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setShowModal(false);
        refetch();
      });
  };

  if(isLoading){
      return <div className=""><Loading></Loading></div>
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn bg-red-500 hover:bg-red-600 text-white btn-sm">
        cancel
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-sm my-6 mx-auto">
              {/*content*/}
              <div className="border border-red-500 rounded-lg h-72 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="bg-red-500 h-20 grid place-content-center">
                  <ExclamationIcon className="w-16 text-white"/>
                </div>

                <div className="text-center h-28 flex justify-center items-center">
                  {isLoading ? (
                    <div className="h-full w-full grid place-content-center">
                      <Loading></Loading>
                    </div>
                  ) : (
                    <p className="my-4 text-red-500 text-md">
                      Are You Sure You Want To Delete This Item?
                    </p>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end h-20 py-1 px-6 border-solid border-slate-200 rounded-b">
                  <button
                    className="btn bg-teal-500 hover:bg-teal-600 text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn bg-red-500 hover:bg-red-600 text-white"
                    type="button"
                    onClick={() => handleCancelOrder(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
