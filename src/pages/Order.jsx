import React, { Fragment, useState } from "react";
import { MyOrderListBox } from "../components/MyOrderListBox";
import { OrderList } from "../components/OrderList";
import { MyTakenOrderBox } from "../components/MyTakenOrderBox.jsx";

function Order() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="h-20"></div>
      <div className="sm:w-[60%] w-[90%] mx-auto max-w-[1200px]">
        <MyOrderListBox />
        <OrderList />
      </div>
      <div
        className="w-[50px] h-[50px] rounded-[50%] bg-black text-white fixed bottom-10 right-10 flex items-center justify-center text-xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <h1>^</h1>
      </div>
      {isOpen === true ? <MyTakenOrderBox setIsOpen={setIsOpen} /> : ""}
    </Fragment>
  );
}

export default Order;
