import React, { Fragment, useEffect, useState } from "react";
import { OrderCard } from "../components/OrderCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

export const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);
  const token = getCookie("accessToken");

  const fetchData = async () => {
    await axios
      .get(
        `https://localhost:5267/api/Order/GetTheirOrder/${
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
      <div className="flex justify-between items-center font-Kanit sm:text-2xl text-xl mb-6">
        <div>Order List</div>
      </div>
      <div className="flex flex-col items-center">
        {allOrder.length === 0 ? (
          <div className="w-full h-20 bg-opacity-30 p-7 font-Kanit sm:text-xl text-base">
            <h2>Order list is currently empty.</h2>
          </div>
        ) : (
          <div className="w-full rounded-lg bg-opacity-30 flex flex-col items-center">
            {allOrder.map((e, key) => {
              return (
                <OrderCard
                  key={key}
                  userTel={e.userTel}
                  img={e.restaurant}
                  restaurant={e.restaurant}
                  detail={e.detail}
                  username={e.username}
                  receiveLocation={e.receiveLocation}
                  userId={e.userId}
                  total={e.ifDoneScore}
                  orderId={e.orderId}
                />
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};
