import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const token = getCookie("accessToken");

  const getUser = async () => {
    try {
      await axios
        .get(
          `https://localhost:5267/api/User/GetUserById/${
            jwtDecode(token).UserId
          }`
        )
        .then((response) => {
          setUser(response.data);
        });
    } catch (error) {
      deleteCookie("accessToken");
      console.log("No token");
      console.log(token);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div className="flex h-screen w-full bg-gray-400 justify-center items-center">
      <div className="flex h-[50vh] w-[70vw] justify-center bg-white items-center rounded-2xl">
        <div className="md:flex-row flex w-[70vw] px-[2vw] justify-between items-center">
          <img
            className="rounded-full min-w-[200px] w-[20vw]"
            src="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png"
            alt="user"
          />
          <div className="flex flex-row">
            <div className="flex flex-col w-[30vw] pl-2">
              <p className="lg:text-6xl md:text-4xl font-bold">
                {user ? user.username : "[Username]"}
              </p>
              <br />
              <span className="lg:text-3xl md:text-2xl">
                {user ? user.firstName : "[Firstname]"}{" "}
                {user ? user.lastName : "[Lastname]"}
              </span>
              <br />
              <p className="lg:text-3xl md:text-2xl">
                {user ? user.tel : "Tel: []"}
              </p>
            </div>
            <div className="flex flex-col w-[10vw]">
              <p className="flex justify-center text-2xl font-bold">Score</p>
              <p className="flex justify-center text-5xl">
                {user ? user.score : "--"}
              </p>
              <div className="flex justify-center pt-2">
                <div className="pr-4">
                  <p className="flex justify-center text-base font-semibold">
                    Success
                  </p>
                  <p className="flex justify-center text-xl font-semibold">
                    {user ? user.success : "--"}
                  </p>
                </div>
                <div>
                  <p className="flex justify-center text-base font-semibold">
                    Failed
                  </p>
                  <p className="flex justify-center text-xl font-semibold">
                    {user ? user.failed : "--"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
