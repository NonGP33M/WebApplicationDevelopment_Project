import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie } from "cookies-next";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  const submitSignIn = async () => {
    try {
      const res = await axios.post("https://localhost:5267/api/Auth/Login", {
        Username: username,
        Password: password,
      });
      const token = res.data.token;
      console.log(token);
      setCookie("accessToken", token, {
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
        sameSite: "strict",
        secure: true,
      });
      navigate("/#");
      window.location.reload();
    } catch (error) {
      setInvalid(true);
    }
  };

  const enterEvent = async (event) => {
    if (event.key === "Enter") {
      await submitSignIn();
    }
  };

  return (
    <div className="flex-col">
      <div className="flex w-full">
        <div className="hidden md:flex w-0 md:w-[60vw] h-[100vh] items-center justify-center bg-gray-400">
          <img
            className="w-[43vw] min-w-[450px] rotate-[25deg] pt-[50px]"
            src={require("../img/homePic1.png")}
            alt="homePic1"
          />
        </div>
        <div className="absolute flex md:max-w-[66vw] min-w-[390px] h-[100vh] items-center justify-center w-full md:w-2/3 bg-white md:right-0 top-[50%] translate-y-[-50%] duration-1000">
          <div className="w-full px-[15vw] sm:px-[12vw] duration-1000">
            <h1 className="md:text-[2rem] text-[2rem] font-bold">
              Sign in to [Title]
            </h1>
            <div className="mt-10">
              <label className="md:text-[1.5rem] text-[1.2rem] font-medium">
                Username
              </label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 md:px-[1.5vw] px-[5vw]"
                placeholder="Enter your username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                onKeyDown={enterEvent}
              />
            </div>
            <div className="mt-3">
              <label className="md:text-[1.5rem] text-[1.2rem] font-medium">
                Password
              </label>
              <input
                className="bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl md:px-[1.5vw] px-[5vw]"
                placeholder="Enter your password"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                onKeyDown={enterEvent}
              />
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <h2
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white font-bold text-1xl text-center"
                onClick={() => submitSignIn()}
              >
                Sign in
              </h2>
            </div>
            <h2 className="md:text-[1.2rem] text-[1rem] my-[10px] text-center text-red-600 h-10">
              {invalid ? "* Invalid username or password *" : ""}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
