import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { ScoreRow } from "./ScoreRow";
import { getCookie } from "cookies-next";
import { MyScore } from "./MyScore";
import jwtDecode from "jwt-decode";

export const ScoreboardBox = () => {
  const token = getCookie("accessToken");
  const [allTopUser, setAllTopUser] = useState([]);
  const [myPlace, setMyPlace] = useState(null);
  const fetchData = async () => {
    await axios.get("https://localhost:5267/api/User/GetTopUser").then((e) => {
      setAllTopUser(e.data);
    });
  };

  const fetchMyData = async () => {
    await axios
      .get(
        `https://localhost:5267/api/User/GetMyPlace/${jwtDecode(token).UserId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => {
        setMyPlace(e.data);
      });
  };

  useEffect(() => {
    fetchData();
    if (token != null) {
      fetchMyData();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="md:w-[60%] w-[80%] mx-auto min-w-[327px]">
        <h1 className="mt-8 text-2xl">Scoreboard</h1>
        <div>
          {allTopUser
            ? allTopUser.map((e, key) => (
                <ScoreRow
                  place={key + 1}
                  userImg={e.userImg}
                  username={e.username}
                  score={e.score}
                  key={key}
                />
              ))
            : ""}
        </div>
      </div>
      {token && myPlace ? (
        <MyScore
          place={myPlace.place}
          userImg={myPlace.userImg}
          username={myPlace.username}
          score={myPlace.score}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};
