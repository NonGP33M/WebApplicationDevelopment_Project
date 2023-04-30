import axios from "axios";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

export const AddOrderBox = (props) => {
  const token = getCookie("accessToken");
  const [data, setData] = useState([{ food: "", amount: "" }]);
  const [receiveLocation, setReceiveLocation] = useState("");
  const [selectedValue, setSelectedValue] = useState("Restaurant_1");

  const handleClick = () => {
    if (data.length !== 3) {
      setData([...data, { food: "", amount: "" }]);
    }
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
  };
  const handleDelete = (i) => {
    if (data.length !== 1) {
      const deleteVal = [...data];
      deleteVal.splice(i, 1);
      setData(deleteVal);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const submitForm = async () => {
    let detail = "";
    let sum = 0;
    data.forEach((e) => {
      detail += e.food + " " + e.amount + " ";
      sum += parseInt(e.amount) * 10;
    });
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Click submit to add your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancle",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.post(
            `https://localhost:5267/api/Order/AddOrder`,
            {
              restaurant: selectedValue,
              detail: detail,
              receiveLocation: receiveLocation,
              ifDoneScore: sum,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          swalWithBootstrapButtons
            .fire("Deleted!", "Your file has been deleted.", "success")
            .then((e) => window.location.reload());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelled", "See U later", "error");
        }
      });
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 outline-none focus:outline-none">
      <div className="relative my-6 mx-auto max-w-lg sm:w-[60%] w-[90%]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
            <h3 className="text-3xl font-semibold">Add Order</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => props.setModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="flex px-5 items-center mt-3">
            <p className="block w-[30%] text-sm font-medium text-black mr-3">
              Select Restaurant
            </p>
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              className="bg-black border w-[70%] text-white text-sm rounded-lg  block p-2.5  "
            >
              <option value="Restaurant_1">Restaurant 1</option>
              <option value="Restaurant_2">Restaurant 2</option>
              <option value="Restaurant_3">Restaurant 3</option>
              <option value="Restaurant_4">Restaurant 4</option>
            </select>
          </div>

          <div className="  px-5 mt-3">
            {data.map((val, i) => (
              <div key={i} className="mb-3 md:flex w-full">
                <span>Food</span>
                <input
                  name="food"
                  value={val.food}
                  onChange={(e) => handleChange(e, i)}
                  className="border-b-2 indent-2 md:w-fit min-[440px]:w-[49%] sm:w-[49%] w-[53%] flex-none sm:flex-1"
                />
                <span>Amount</span>
                <input
                  name="amount"
                  type="number"
                  value={val.amount}
                  onChange={(e) => handleChange(e, i)}
                  className="border-b-2 indent-2 md:w-[50px] min-[440px]:w-[80px] w-[50px] flex-none"
                />
                <button
                  onClick={() => handleDelete(i)}
                  className="md:ml-2 mt-2 md:mt-0 p-2 bg-red-600 rounded-lg w-full md:w-fit text-white md:flex-none"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={handleClick}
              className="w-full p-2 bg-black rounded-lg text-white"
            >
              Add
            </button>
          </div>
          <div className="w-full  my-3 px-5">
            <p>Recieve Location</p>
            <input
              className="border-b-2 indent-2 w-full"
              type="text"
              onChange={(e) => setReceiveLocation(e.target.value)}
            />
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => props.setModal(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => submitForm()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
