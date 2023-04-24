import React from "react";
import ScoreboardBox from "../components/ScoreboardBox";

function Scoreboard() {
  return (
    <div className=" max-w-full w-screen flex flex-col items-center py-32">
      <h1 className="font-bold text-5xl text-left w-1/2">Scoreboard</h1>
      <div className="w-3/5">
        <ScoreboardBox place="1" name="John Doe" score="100" color="#fff490" />
        <ScoreboardBox place="2" name="Jane Doe" score="90" color="#f4f4f4" />
        <ScoreboardBox place="3" name="Bob Smith" score="80" color="#ffd6b0" />
        <ScoreboardBox
          place="4"
          name="Alice Smith"
          score="70"
          color="#c5c5c5"
        />
        <ScoreboardBox
          place="5"
          name="Charlie Brown"
          score="60"
          color="#c5c5c5"
        />
        <ScoreboardBox
          place="6"
          name="Emma Watson"
          score="50"
          color="#c5c5c5"
        />
        <ScoreboardBox place="7" name="Tom Hanks" score="40" color="#c5c5c5" />
        <ScoreboardBox
          place="8"
          name="Angelina Jolie"
          score="30"
          color="#c5c5c5"
        />
        <ScoreboardBox place="9" name="Brad Pitt" score="20" color="#c5c5c5" />
        <ScoreboardBox
          place="10"
          name="Scarlett Johansson"
          score="10"
          color="#c5c5c5"
        />
      </div>
      {/*Special ScoreboardBox for the User*/}
      <div
        className="fixed font-bold text-2xl w-screen py-8 rounded-t-2xl shadow-2xl bottom-0 flex justify-between items-center"
        style={{ backgroundColor: "#898989" }}
      >
        <div
          className="text-gray-700 text-4xl pl-16 justify-self-start"
          title="place"
        >
          16
        </div>
        <img
          className="absolute bottom-5 left-[150px] rounded-full border-2 border-black"
          src="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png"
          alt="user picture"
          width="120px"
        ></img>
        <div className="text-left text-4xl w-1/2" title="name">
          User
        </div>
        <div className="pr-40 text-4xl" title="score">
          0
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
