import { MailIcon } from "@heroicons/react/solid";
import React from "react";

const MyPortfolio = () => {
  return (
    <div className="mt-24 px-4 py-8 w-full max-w-5xl mx-auto">
      <h1 className="text-4xl text-center border-b pb-6">My Portfolio</h1>
      <div className="my-8 w-full ">
        <article className="w-full max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center">
            Hello, I'm Robiul Hasan
          </h3>
          <p className="flex justify-center my-4">
            <MailIcon className="w-6 mr-3"></MailIcon>{" "}
            muhammadrobiul502@gmail.com
          </p>
          <p className="mt-4 w-full mx-auto text-center">
            I am A Passionate Web Developer.Born & Raised In Dhaka,Bangladesh. I
            have serious passion for UI Development creating intuitive, dynamic
            user experiences.
          </p>
        </article>
        <div>
          <h1 className="text-3xl text-center my-12 md:mt-0 border-b pb-2">
            Education
          </h1>
          <div className="mb-20 flex md:flex-row flex-col md:justify-around">
            <div className="mb-6 text-center md:text-left">
              <p>2017:SSC</p>
              <p>President Ziaur Rahman High School</p>
            </div>
            <div className="mb-6 text-center md:text-left">
              <p>2019:HSC</p>
              <p>Kabi Nazrul Govt. College</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center my-12 md:mt-0 border-b pb-2">
            Skills
          </h1>
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
              <img
                className="w-20 m-6"
                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://miro.medium.com/max/632/1*5QD8DKhOjRe-gcYjozlLNQ.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://4.bp.blogspot.com/-Fxo_qnGJBj0/WRoDPNdlEII/AAAAAAAABF0/1mSHmv5gleQaCsHKEDgTB3DbNghjCXvZACLcB/s1600/logo_firebase_1920px_clr.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7RVaKE0ubjH_Ioi90MHiDzKw-GpNI1BsHw&usqp=CAU"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://g.foolcdn.com/art/companylogos/square/mdb.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
              <img
                className="w-20 m-6"
                src="https://uploads.toptal.io/blog/category/logo/294/git-614637d3045034397bdb2cb2513f16da.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl  text-center my-12 md:mt-0 border-b pb-2">
            Projects
          </h1>
          <div>
            <div className="bg-gray-200 p-4  rounded-md mb-6">
              <img src="https://i.ibb.co/f2JSwbh/Screenshot-173.png" alt="" />
              <div className="p-4">
                <h1 className="text-xl">Warehouse Management Site</h1>
                <p className="mt-2 text-lg text-indigo-500">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/bd-manufacturer.appspot.com/o/Screenshot%20(173).png?alt=media&token=b0a4aee9-fcd8-492e-ba49-52ba5dc40f0b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gray-200 p-4  rounded-md mb-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bd-manufacturer.appspot.com/o/Screenshot%20(179).png?alt=media&token=faddc237-dbc5-44ee-9538-9b5b8679c636"
                alt=""
              />
              <div className="p-4">
                <h1 className="text-xl">Personal Website</h1>
                <p className="mt-2 text-lg text-indigo-500">
                  <a
                    href="https://robiulhasan.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gray-200 p-4  rounded-md mb-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bd-manufacturer.appspot.com/o/Screenshot%20(175).png?alt=media&token=1107b730-87f6-4484-b001-4997643379eb"
                alt=""
              />
              <div className="p-4">
                <h1 className="text-xl">Al Nafis - Doctor Website</h1>
                <p className="mt-2 text-lg text-indigo-500">
                  <a
                    href="https://i.ibb.co/yF0DJSB/Screenshot-175.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
