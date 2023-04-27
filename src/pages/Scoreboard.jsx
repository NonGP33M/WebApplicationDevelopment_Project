import React from "react";
import ScoreboardBox from "../components/ScoreboardBox";
import ScoreboardBoxSpecial from "../components/ScoreboardBoxSpecial";

function Scoreboard() {
  return (
    <div className=" max-w-full w-screen flex flex-col items-center py-32">
      <h1 className="font-bold text-5xl text-left w-1/2">Scoreboard</h1>
      <div className="w-3/5">
        <ScoreboardBox place="1" name="John Doe" score="100" color="#fff490" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="2" name="Jane Doe" score="90" color="#f4f4f4" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="3" name="Bob Smith" score="80" color="#ffd6b0" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="4" name="Alice Smith" score="70" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="5" name="Charlie Brown" score="60" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />           <ScoreboardBox place="6" name="Emma Watson" score="50" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="7" name="Tom Hanks" score="40" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="8" name="Angelina Jolie" score="30" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="9" name="Brad Pitt" score="20" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
        <ScoreboardBox place="10" name="Scarlett Johansson" score="10" color="#c5c5c5" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" />
      </div>
      {/*Special ScoreboardBox for the User*/}
          <ScoreboardBoxSpecial place="16" name="USER" score="0" color="#898989" picture="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png"/>
    </div>
  );
}

export default Scoreboard;
