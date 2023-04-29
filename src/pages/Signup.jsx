import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const addUser = () => {
    axios.post("http://localhost:5267/api/Auth/Register", {
      username: username,
      password: password,
    });
  };
  return (
    <div className="flex-col">
      <div className="flex w-full h-screen">
        <div className="absolute lg:flex w-[65vw] h-[100vh] items-center justify-center bg-gray-200">
          <img
            className="w-[40vw] rotate-[25deg] pt-[50px]"
            src={require("../img/2.png")}
            alt="SignUpPic"
          />
        </div>
        <div className="absolute flex max-w-[66vw] h-[100vh] items-center justify-center lg:w-2/3 bg-white right-0 top-[50%] translate-y-[-50%]">
          <div className=" w-12/12 max-w-[800px] px-20 pt-[75px]">
            <h1 className="text-3xl font-bold">Sign up to [Title]</h1>
            <div className="mt-10">
              <label className="text-1xl font-medium">Username</label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                placeholder="Enter your username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <label className="text-1xl font-medium">Password</label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                placeholder="Enter your password"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <label className="text-1xl font-medium">Re-Enter Password</label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                placeholder="Re-Enter password"
                type="password"
              />
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <Link
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white font-bold text-1xl text-center"
                to="/#"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
