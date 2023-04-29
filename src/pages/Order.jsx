import React from "react";
import { useState } from "react";
import OrderBox from "../components/OrderBox";
import MyOrderBox from "../components/MyOrderBox";

function Order() {
  const [UserN] = useState("ddd"); //for keep Username

  const [showModal, setShowModal] = React.useState(false); //for modal
  const [orders, setOrders] = useState([]); //for OrderList in Order List div
  const [myOrders, setMyOrders] = useState([]); //for MyOrderList in My Order div
  const [sName, setSName] = useState(""); //for Restaurant name
  const [mName, setMName] = useState(""); //for Order name
  const [Deli, setDeli] = useState(""); //for Delivery place name
  const [isDisabled, setIsDisabled] = useState(true); //for disabled button for submit in modal

  const handleSNameChange = (event) => {
    //for Restaurant input
    setSName(event.target.value);
    setIsDisabled(event.target.value === "" || Deli === "" || mName === ""); //เช็คว่าว่างมั้ย
  };

  const handleMNameChange = (event) => {
    //for Order input
    setMName(event.target.value);
    setIsDisabled(sName === "" || Deli === "" || event.target.value === "");
  };
  const handleDeliChange = (event) => {
    //for Delivery place input
    setDeli(event.target.value);
    setIsDisabled(sName === "" || mName === "" || event.target.value === "");
  };
  const handleSubmit = (event) => {
    //for submit in modal
    event.preventDefault();
    const order = {
      score: Math.floor(Math.random() * 100), // แทนที่scoreของuserตรงนี้
      id: Math.floor(Math.random() * 100), // id สำหรับ OrderBox
      store: sName, //for Restaurant name
      order: mName, //for Order name
      deli: Deli, //for Delivery place name
      name: UserN, //for username
    };
    const NewMyOrders = [...myOrders, order]; //สำหรับใส่ข้อมูลในlist
    const newOrders = [...orders, order].sort((a, b) => a.score - b.score); //ใส่ข้อมูลและ sort ค่า
    setOrders(newOrders); //set Order List
    setMyOrders(NewMyOrders); //set My Order List
    setSName("");
    setMName("");
    setDeli("");
    setIsDisabled(true);
    setShowModal(false); // close modal
  };

  const handleDeleteMyOrder = (orderId) => {
    //delete button in my order box
    if (UserN === "ddd") {
      // ใส่ชื่อUserแทน ddd
      const filteredOrders = myOrders.filter((order) => order.id !== orderId);
      setMyOrders(filteredOrders);
    }
  };
  const handleTakeOrder = (orderId) => {
    //for take order
    if (UserN !== "dd") {
      // ใส่ชื่อUserแทน dd
      const takenOrder = orders.find((order) => order.id === orderId); //เอาboxที่โดนกด
      const filteredOrders = orders.filter((order) => order.id !== orderId); //เอาboxออก
      setOrders(filteredOrders);
      const KeepOrderListItem = document.createElement("div");
      // สำหรับส่งค่าใน OrderBox
      let s = document.createElement("p");
      let o = document.createElement("p");
      let n = document.createElement("p");
      s.innerHTML = "Store: " + takenOrder.store;
      o.innerHTML = "Order: " + takenOrder.order;
      n.innerHTML = "Name: " + takenOrder.name;
      KeepOrderListItem.appendChild(s);
      KeepOrderListItem.appendChild(o);
      KeepOrderListItem.appendChild(n);
      const orderListItem = document.createElement("li");
      orderListItem.appendChild(KeepOrderListItem);

      //document.getElementById('ReceivedOrder').appendChild(orderListItem);
    }
  };

  return (
    <div class="mx-20" style={{ paddingBottom: "650px" }}>
      <br />
      <br />
      <br />
      <br />
      <div class="flex justify-between ...">
        <h2 class="mb-3 text-2xl font-semibold text-black-900">
          My Order List
        </h2>
        {/*button*/}
        <div>
          <button
            className="bg-slate-950 text-white active:bg-gray-600 font-bold text-lg px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Place Order
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold dark:text-black">
                        Your Order
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div class="mb-6">
                        <label
                          for="default-input"
                          class="block mb-1 text-sm font-medium text-gray-900"
                        >
                          Restaurant
                        </label>
                        <input
                          type="text"
                          id="sName"
                          name="sName"
                          value={sName}
                          onChange={handleSNameChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          for="default-input"
                          class="block mb-1 text-sm font-medium text-gray-900"
                        >
                          MENU
                        </label>
                        <input
                          type="text"
                          id="mName"
                          name="mName"
                          value={mName}
                          onChange={handleMNameChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          for="default-input"
                          class="block mb-1 text-sm font-medium text-gray-900"
                        >
                          Delivery place
                        </label>
                        <input
                          type="text"
                          id="Deli"
                          name="Deli"
                          value={Deli}
                          onChange={handleDeliChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        disabled={isDisabled}
                        onClick={handleSubmit}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
      <div>
        {myOrders.map((order) => (
          <MyOrderBox
            key={order.score}
            orderId={order.id}
            Username={order.name}
            StoreN={order.store}
            OrderN={order.order}
            Deli={order.deli}
            onDelete={handleDeleteMyOrder}
            status="ACCEPTED"
          />
        ))}
      </div>
      {/*Order List*/}
      <div class="pt-6">
        <h2 class="mb-3 text-2xl font-semibold text-black-900">Order List</h2>
        <div id="OrderListSpace">
          {orders.map((order) => (
            <OrderBox
              key={order.score}
              orderId={order.id}
              Username={order.name}
              StoreN={order.store}
              OrderN={order.order}
              Score={order.score}
              Deli={order.deli}
              onTakeOrder={handleTakeOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
