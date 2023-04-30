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
      <div className="ml-10">
        <h1>{props.place}</h1>
      </div>
      <div>
        <img
          src={`https://localhost:5267/static/${props.userImg}`}
          alt=""
          className="rounded-[50%] h-16 w-16"
        />
      </div>
      <div>
        <h1 className="flex-1">{props.username}</h1>
      </div>
      <div className="mr-10">
        <h1>{props.score}</h1>
      </div>
    </div>
  );
};
