import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let isLogin = false;
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
            <Link className="mx-4 text-xl" to="/sign_in">
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
            <Link className="mx-4 text-xl" to="/#">
              [Username]
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
