import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(true);
  const navigate = useNavigate();

  const submitSignUp = async () => {
    if (password !== rePassword || password === "") {
      setMatchPassword(false);
      setInvalidPassword(true);
      console.log("Re-Enter Password Incorrect");
    } else if (
      username.length === 0 /*|| firstName.length===0 || lastName.length===0*/
    ) {
      setMatchPassword(true);
      setInvalidPassword(true);
      console.log("No Username");
    } else {
      console.log("Valid");
      await addUser();
    }
  };
  const addUser = async () => {
    try {
      await axios.post("https://localhost:5267/api/Auth/Register", {
        Username: username,
        Password: password,
        FirstName: "firstname",
        LastName: "lastname",
      });
      navigate("/sign_in");
      console.log("User Added");
    } catch (err) {
      console.log(err);
    }
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
                onChange={(event) => {
                  setRePassword(event.target.value);
                }}
              />
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <h2
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white font-bold text-1xl text-center"
                onClick={() => submitSignUp()}
              >
                Sign up
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
