import React from "react";

export const ScoreRow = (props) => {
  return (
    <div
      className={`w-[100%] flex h-10 my-8 justify-between items-center font-Kanit md:text-xl rounded-lg shadow-md ${
        props.place === 1
          ? "bg-[#FFF490]"
          : props.place === 2
          ? " bg-[#F4F4F4]"
          : props.place === 3
          ? " bg-[#FFD6B0]"
          : "bg-[#d3d3d3]"
      }`}
    >
      <div className="sm:ml-10 flex-none sm:w-16 w-5 ml-5">
        <h1>{props.place}</h1>
      </div>
      <div className="flex-none">
        <img
          src={`https://localhost:5267/static/${props.userImg}`}
          alt=""
          className="rounded-[50%] h-16 w-16"
        />
      </div>
      <div className="flex-1 sm:w-32 sm:ml-10 ml-3 overflow-hidden">
        <h1>{props.username}</h1>
      </div>
      <div className="sm:mr-10 flex-none mr-5 overflow-hidden">
        <h1>{props.score}</h1>
      </div>
    </div>
  );
};
