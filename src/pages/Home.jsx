import React from "react";
import Footer from "../components/Footer";

function Home() {
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
      style: "pt-[10vw]",
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
      style: "scale-125 pt-[9vw]",
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
    <div className="flex-col">
      <div className="relative flex flex-wrap h-screen items-center justify-center font-kanit caret-transparent">
        <div className="text-center my-28  drop-shadow-md">
          <p className="text-[4rem]">จะกินอะไรก็สั่งมา</p>
          <p className="text-[2rem]">- ไอ้พวกเวร -</p>
        </div>

        <div className="w-[500px] right-[50px] rotate-[25deg]">
          <img src={require("../img/homePic1.png")} alt="homePic1" />
        </div>
      </div>

      <div className="relative flex h-auto bg-zinc-800 justify-center">
        <div className="flex flex-col text-center text-white font-kanit caret-transparent mt-28 items-center">
          <p className="text-[4rem]">จัดทำโดย</p>

          <div className="flex flex-wrap my-[5vw] gap-x-[16vw] gap-y-[5vw] justify-center pt-[5vw]">
            {profile.map((item, key) => (
              <>
                <div>
                  <div
                    className="flex w-[30vw] h-[30vw] bg-white justify-center items-center overflow-hidden"
                    key={key}
                  >
                    <img src={item.url} alt="Oot" className={item.style} />
                    {console.log(item.url)}
                  </div>
                  <div className="pt-[1vw]">
                    <div className="text-[2vw]">{item.id}</div>
                    <div className="text-[1.2vw]">{item.name}</div>
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
