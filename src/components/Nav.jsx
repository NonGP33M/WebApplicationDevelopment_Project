import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container fixed z-50 bg-zinc-900 shadow flex justify-between w-full h-20 min-w-full items-center font-kanit drop-shadow-xl">
      <div className="flex text-white mx-12 text-xl">
        <Link className="mx-4 text-xl" to="/#">
          [Title]
        </Link>
      </div>

      {/* Before Signed In */}
      <div className="flex mx-12 text-white justify-between items-center">
        {!isLogin && (
          <div>
            <Link
              className="mx-4 text-xl"
              to="/sign_in"
              onClick={() => setIsLogin(true)}
            >
              Sign in
            </Link>
            <Link
              className="mx-4 text-xl rounded-lg border-2 py-1 px-2"
              to="/sign_up"
            >
              Sign up
            </Link>
          </div>
        )}
        {isLogin && (
          <div>
            <Link className="mx-4 text-xl" to="/#">
              Home
            </Link>
            <Link className="mx-4 text-xl" to="/order">
              Order
            </Link>
            <Link className="mx-4 text-xl" to="/scoreboard">
              Scoreboard
            </Link>
            <Link className="mx-4 text-xl dropdown dropdown-end">
              [Username]
              <ul
                tabIndex={0}
                className="menu dropdown-content p-1 shadow bg-zinc-800 rounded-box w-40 mt-2"
              >
                <li>
                  <Link className="mx-4 text-xl" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="mx-4 text-xl"
                    to="/#"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
