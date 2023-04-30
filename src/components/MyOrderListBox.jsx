import React, { Fragment, useEffect, useState } from "react";
import { OrderCard } from "../components/OrderCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import { AddOrderBox } from "./AddOrderBox";

export const MyOrderListBox = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const token = getCookie("accessToken");

  const fetchData = async () => {
    await axios
      .get(
        `https://localhost:5267/api/Order/GetMyOrder/${
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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="flex justify-between items-center font-Kanit sm:text-2xl text-xl mt-6 mb-6">
        <div>My Order List</div>
        <div
          className="text-white bg-black rounded-lg p-2 hover:text-black hover:bg-white border-black border-2 duration-200 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Place Order
        </div>
      </div>
      <div className="flex flex-col items-center mb-8">
        {allOrder.length === 0 ? (
          <div className="w-full h-20 p-7 font-Kanit relative sm:text-xl text-base">
            <h2>Your order list is currently empty.</h2>
          </div>
        ) : (
          allOrder.map((e, key) => {
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
          })
        )}
      </div>
      {showModal ? <AddOrderBox setModal={setShowModal} /> : ""}
    </Fragment>
  );
};
