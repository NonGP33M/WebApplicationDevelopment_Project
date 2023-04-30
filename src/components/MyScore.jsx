import React from "react";

export const MyScore = (props) => {
  return (
    <div className="flex fixed bottom-0 w-full rounded-t-xl h-20 justify-between items-center font-Kanit text-xl bg-gray-600 text-white shadow-xl">
      <div className="md:ml-32 sm:ml-16 ml-8">
        <h1>{props.place}</h1>
      </div>
      <div>
        <img
          src={`https://localhost:5267/static/${props.userImg}`}
          alt=""
          className="rounded-[50%] h-24 w-24"
        />
      </div>
      <div>
        <h1>{props.username}</h1>
      </div>
      <div className="md:mr-32 sm:mr-16 mr-8">
        <h1>{props.score}</h1>
      </div>
    </div>
  );
};
