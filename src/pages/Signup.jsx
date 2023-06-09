import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [validSignIn, setValidSignIn] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const submitSignUp = async () => {
    if (firstname.length === 0) {
      setErrorText("* First name is required *");
    } else if (lastname.length === 0) {
      setErrorText("* Last name is required *");
    } else if (phoneNumber.length === 0) {
      setErrorText("* Phone number is required *");
    } else if (username.length === 0) {
      setErrorText("* Username is required *");
    } else if (password.length === 0) {
      setErrorText("* Password is required *");
    } else if (password !== rePassword) {
      setErrorText("* Passwords do not match *");
    } else {
      setValidSignIn(true);
      await addUser();
    }
  };
  const addUser = async () => {
    try {
      await axios.post("https://localhost:5267/api/Auth/Register", {
        Username: username,
        Password: password,
        FirstName: firstname,
        LastName: lastname,
        Tel: phoneNumber,
      });
      navigate("/sign_in");
      console.log("User Added");
    } catch (err) {
      console.log(err);
    }
  };

  const enterEvent = async (event) => {
    if (event.key === "Enter") {
      await submitSignUp();
    }
  };

  return (
    <div className="flex-col">
      <div className="flex w-full h-screen">
        <div className="hidden md:flex w-[65vw] h-[100vh] items-center justify-center bg-gray-400 duration-1000">
          <img
            className="min-w-[400px] w-[36vw] rotate-[25deg] pt-[50px] duration-1000"
            src={require("../img/2.png")}
            alt="SignUpPic"
          />
        </div>
        <div className="absolute flex lg:max-w-[66vw] min-w-[390px] h-[100vh] items-center justify-center w-full lg:w-2/3 bg-white md:right-0 top-[50%] translate-y-[-50%] duration-1000">
          <div className="w-full px-[15vw] lg:px-[10vw] md:px-[20vw] sm:px-[12vw] sm:pt-[15vh] pt-[10vh] lg:pt-[10vh] md:pt-[8vh] duration-1000">
            <h1 className="text-3xl font-bold">Sign up to [Title]</h1>
            <div className="flex lg:flex-row flex-col justify-normal lg:mt-10 mt-[2vw] gap-5">
              <div className="flex flex-col w-full">
                <label className="text-1xl font-medium">First name</label>
                <input
                  className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                  placeholder="Enter your first name"
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-1xl font-medium">Last name</label>
                <input
                  className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                  placeholder="Enter your last name"
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="text-1xl font-medium">Phone number</label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl"
                placeholder="Enter your phone number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
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
                onKeyDown={enterEvent}
              />
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <h2
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white font-bold text-1xl text-center"
                onClick={() => submitSignUp()}
              >
                Create account
              </h2>
            </div>
            <h2 className="my-[10px] text-center text-red-600 h-10">
              {!validSignIn ? errorText : ""}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
