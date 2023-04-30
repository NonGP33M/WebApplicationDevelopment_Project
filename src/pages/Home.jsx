import { React, useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

function Home() {
  const token = getCookie("accessToken");
  const getUser = async () => {
    try {
      await axios
        .get(
          `https://localhost:5267/api/User/GetUserById/${
            jwtDecode(token).UserId
          }`
        )
        .then((response) => {
          console.log("Signed In");
        });
    } catch (error) {
      deleteCookie("accessToken");
      console.log("No token");
      console.log(token);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  const profile = [
    {
      url: require("../img/Paan.jpg"),
      style: "",
      id: "64010512",
      name: "ปัณณธร พฤกษชาติ",
    },
    {
      url: require("../img/Peem.jpg"),
      style: "",
      id: "64010683",
      name: "ภูมิรพี สินคีรี",
    },
    {
      url: require("../img/Bank.jpg"),
      style: "lg:pt-[6vw] pt-[10vw]",
      id: "64010765",
      name: "วรเมธ ธรรมจริยาวัฒน์",
    },
    {
      url: require("../img/Earth.jpg"),
      style: "",
      id: "64010790",
      name: "วศิน เถาสมบัติ",
    },
    {
      url: require("../img/Tien.jpg"),
      style: "scale-125 lg:pt-[6vw] pt-[4vw]",
      id: "64010792",
      name: "วสันต์ อุดมธนทรัพย์",
    },
    {
      url: require("../img/Oot.jpg"),
      style: "scale-125",
      id: "64010845",
      name: "ศิรสิทธิ์ เทียนเจริญชัย",
    },
  ];

  return (
    <div className="flex-col min-w-[390px]">
      <div className="min-[390]:absolute relative flex flex-col sm:flex-row sm:gap-0 gap-[15vh] lg:h-screen h-[100vh] items-center justify-center font-kanit caret-transparent duration-500">
        <div className="flex-col  text-center drop-shadow-md z-10 sm:pt-0 pt-[15vh] duration-1000">
          <p className="lg:text-[4rem] text-[3rem] duration-500">
            จะกินอะไรก็สั่งมา
          </p>
          <p className="lg:text-[2rem] text-[1.5rem] duration-500">
            - ไอ้พวกเวร -
          </p>
          <Link
            to={token ? "/order" : "/sign_in"}
            className="flex justify-center"
          >
            <h2 className="text-[1.5rem] rounded-lg border-4 drop-shadow-sm border-black mt-10 px-[30px] hover:bg-black hover:text-white duration-500">
              Order now!
            </h2>
          </Link>
        </div>

        <div className="relative sm:w-[35vw] w-[80vw] right-[1vh] min-w-[300px] max-w-[400px] sm:pr-0 pr-5 rotate-[25deg] z-0 ">
          <img src={require("../img/homePic1.png")} alt="homePic1" />
        </div>
      </div>

      <div className="relative flex h-auto bg-zinc-800 justify-center">
        <div className="flex flex-col text-center text-white font-kanit caret-transparent sm:mt-28 mt-10 items-center">
          <p className="sm:text-[4rem] text-[2rem] duration-1000">จัดทำโดย</p>

          <div className="flex flex-wrap my-[5vw] gap-x-[16vw] gap-y-[5vw] justify-center">
            {profile.map((item, key) => (
              <>
                <div>
                  <div
                    className="flex lg:max-w-[300px] lg:max-h-[300px] max-h-[300px] max-w-[300px] bg-white justify-center items-center overflow-hidden rounded-2xl duration-1000"
                    key={key}
                  >
                    <img src={item.url} alt="Oot" className={item.style} />
                  </div>
                  <div className="pt-[1vw]">
                    <div className="text-[2rem]">{item.id}</div>
                    <div className="text-[1.5rem]">{item.name}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
