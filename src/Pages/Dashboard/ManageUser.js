import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const { data, isLoading, error, refetch } = useQuery("users", async () => {
    const res = await fetch(`https://agile-atoll-96122.herokuapp.com/user`, {
      method: "GET",
      headers: {
        'authorization': `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.json();
  });

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleMakeAdmin = (email) => {
    if (admin) {
      fetch(`https://agile-atoll-96122.herokuapp.com/user/admin/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "Access-Control-Allow-Origin": "*"
        },
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
        });
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <section className="mt-24 p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
        <thead className="bg-slate-400 text-white">
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((user) => (
                <tr>
                  <th className="bg-white">{data.indexOf(user) + 1}</th>
                  <td>{user.email}</td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                        onClick={() => handleMakeAdmin(user.email)}
                      >
                        Make Admin
                      </button>
                    )}
                    {user.role === "admin" && (
                      <p className="text-green-500">Admin</p>
                    )}
                  </td>
                </tr>
              ))}
            {isLoading && <Loading></Loading>}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
