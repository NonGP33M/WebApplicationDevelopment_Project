import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import { OrderCard } from "../components/OrderCard";

export const MyTakenOrderBox = (props) => {
  const token = getCookie("accessToken");
  const [allOrder, setAllOrder] = useState([]);

  const fetchData = async () => {
    await axios
      .get(
        `https://localhost:5267/api/Order/GetMyTakingOrder/${
          jwtDecode(token).UserId
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => {
        setAllOrder(e.data);
      });
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <div className="justify-center items-center flex overflow-x-hidden bg-black bg-opacity-30 backdrop-blur-sm z-50 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="relative sm:w-[60%] w-[90%] my-6 mx-auto max-w-[1200px]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Your Taken Order</h3>
          </div>
          {/*body*/}
          <div className="h-[18rem] overflow-y-auto">
            {allOrder.length !== 0 ? (
              <div className=" p-6 flex flex-col items-center w-full ">
                {allOrder.map((e, key) => {
                  return (
                    <OrderCard
                      key={key}
                      img={e.restaurant}
                      restaurant={e.restaurant}
                      detail={e.detail}
                      receiveLocation={e.receiveLocation}
                      userTel={e.userTel}
                      userId={e.userId}
                      username={e.username}
                      total={e.ifDoneScore}
                      status={e.isTaken}
                      orderId={e.orderId}
                      receiverUsername={e.receiverUsername}
                      receiverTel={e.receiverTel}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center font-kanit text-black h-[18rem] text-xl">
                <h1>Your Delivery Order Is Empty</h1>
              </div>
            )}
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => props.setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
