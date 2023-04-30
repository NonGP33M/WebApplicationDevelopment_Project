import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const token = getCookie("accessToken");
  const navigate = useNavigate();

  const setOpen = () => {
    setIsOpen(!isOpen);
  };
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
    <div className="container fixed z-50 bg-zinc-900 shadow flex justify-between w-full h-[80px] min-w-full items-center font-kanit drop-shadow-xl">
      <div className="flex text-white mx-12 text-xl justify-between items-center w-full">
        <Link className="mx-4 text-xl whitespace-nowrap" to="/#">
          <FontAwesomeIcon icon={faBurger} className="mr-5" />
          จะกินอะไรก็สั่งมา
        </Link>
        <span className={"cursor-pointer mx-12 md:hidden flex duration-500"}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={setOpen}
            className="text-white text-[2rem]"
          />{" "}
        </span>
      </div>
      <ul
        className={`md:hidden z-[0] absolute w-screen lg:opacity-0 top-[80px]  transition-all ease-in duration-500 ${
          isOpen ? "left-0 opacity-90 bg-zinc-800" : "left-[-1000px] opacity-0"
        }`}
        onClick={setOpen}
      >
        {token ? (
          <>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/scoreBoard">Scoreboard</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/order">Order</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link onClick={signOutEvent}>Sign Out</Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/scoreBoard">Scoreboard</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/sign_in">Sign in</Link>
            </li>
            <li className="text-white hover:bg-white py-4 px-10 hover:text-black duration-500">
              <Link to="/sign_up">Sign up</Link>
            </li>
          </>
        )}
      </ul>
      <div
        className={
          "hidden md:flex mx-12 text-white justify-between items-center"
        }
      >
        {token == null && (
          <div className="flex items-center whitespace-nowrap">
            <Link className="mx-4 text-xl" to="/#">
              Home
            </Link>
            <Link className="mx-4 text-xl" to="/scoreboard">
              Scoreboard
            </Link>
            <Link className="flex mx-4 text-xl" to="/sign_in">
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
          <div className="flex items-center whitespace-nowrap">
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
