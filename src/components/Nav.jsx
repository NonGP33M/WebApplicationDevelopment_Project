import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

const Nav = () => {
  const [user, setUser] = useState(null);
  const token = getCookie("accessToken");
  const navigate = useNavigate();

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

  const signOutEvent = () => {
    deleteCookie("accessToken");
    navigate("/#");
    window.location.reload();
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div className="container fixed z-50 bg-zinc-900 shadow flex justify-between w-full h-[10vh] min-w-full items-center font-kanit drop-shadow-xl">
      <div className="flex text-white mx-12 text-xl">
        <Link className="mx-4 text-xl" to="/#">
          [Title]
        </Link>
      </div>

      {/* Before Signed In */}
      <div className="flex mx-12 text-white justify-between items-center">
        {token == null && (
          <div>
            <Link className="mx-4 text-xl" to="/sign_in">
              Sign in
            </Link>
            <Link
              className="mx-4 text-xl rounded-lg border-2 py-1 px-2  hover:bg-white hover:text-black duration-500"
              to="/sign_up"
            >
              Sign up
            </Link>
          </div>
        )}
        {token != null && (
          <div className=" hidden md:flex items-center ">
            <Link className="mx-4 text-xl" to="/#">
              Home
            </Link>
            <Link className="mx-4 text-xl" to="/order">
              Order
            </Link>
            <Link className="mx-4 text-xl" to="/scoreboard">
              Scoreboard
            </Link>
            <h2
              tabIndex={0}
              className="mx-4 text-xl dropdown dropdown-end rounded-lg border-2 py-1 px-2  hover:bg-white hover:text-black cursor-pointer duration-500"
            >
              {user ? user.username : ""}

              <ul
                tabIndex={0}
                className="menu dropdown-content p-1 shadow hover:bg-zinc-800 bg-zinc-800 hover:text-white text-white rounded-box w-40 mt-2 duration-1000"
              >
                <li>
                  <Link
                    className="mx-4 text-xl hover:bg-zinc-600"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="mx-4 text-xl hover:bg-zinc-600"
                    onClick={() => signOutEvent()}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
