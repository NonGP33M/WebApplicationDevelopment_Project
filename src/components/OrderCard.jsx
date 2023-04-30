import React from "react";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

export const OrderCard = (props) => {
  const token = getCookie("accessToken");

  const cancleOrder = (orderId) => {
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
        text: "Click submit to cancle your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancle",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(
            `https://localhost:5267/api/Order/DeleteOrder/${orderId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          swalWithBootstrapButtons
            .fire("Done!", "Your order have been deleted", "success")
            .then((e) => window.location.reload());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your order still alive",
            "error"
          );
        }
      });
  };

  const takeOrder = async (orderId) => {
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
        text: "Click submit to cancle your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.patch(
            `https://localhost:5267/api/Order/TakeOrder/${orderId}`,
            {
              receiverId: jwtDecode(token).UserId,
              receiverUsername: jwtDecode(token).Username,
              receiverTel: jwtDecode(token).Tel,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          swalWithBootstrapButtons
            .fire("Done!", "Your order have been deleted", "success")
            .then((e) => window.location.reload());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your order still alive",
            "error"
          );
        }
      });
  };

  const successOrder = async (orderId) => {
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
        text: "Click submit to cancle your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(
            `https://localhost:5267/api/Order/SuccessOrder/${orderId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          swalWithBootstrapButtons
            .fire("Done!", "Your order have been deleted", "success")
            .then((e) => window.location.reload());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your order still alive",
            "error"
          );
        }
      });
  };

  const denyOrder = async (orderId) => {
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
        text: "Click submit to cancle your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(
            `https://localhost:5267/api/Order/DenyOrder/${orderId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          swalWithBootstrapButtons
            .fire("Done!", "Your order have been deleted", "success")
            .then((e) => window.location.reload());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your order still alive",
            "error"
          );
        }
      });
  };

  return (
    <div className="w-full lg:h-[13rem] bg-black lg:flex rounded-xl overflow-hidden my-6 flex-wraps">
      <div className="w-full lg:w-[25%] flex justify-center items-center object-cover">
        <img
          src={`https://localhost:5267/static/${props.img}.jpg`}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full lg:w-[75%] relative flex">
        <div className="flex w-[100%]  text-white font-Kanit">
          <div className="p-5 text-white font-Kanit sm:text-base text-sm">
            <h1>{props.restaurant}</h1>
            <h3>Order : {props.detail} </h3>
            <h3>Receive Location : {props.receiveLocation}</h3>
            <h3>Total : {parseInt(props.total) / 10}</h3>
            <h3>
              Status : {props.status === true ? "On Delivery" : "Pending"}
            </h3>
            <h1>Order by : {props.username}</h1>
            <h1>Tel : {props.userTel}</h1>
          </div>
          {props.status === true ? (
            <div className="p-5 sm:text-base text-sm">
              <h1>Delivery By : {props.receiverUsername}</h1>
              <h1>Tel : {props.receiverTel}</h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" absolute bottom-5 right-5">
          <div className="flex flex-col">
            <div>
              {props.userId === jwtDecode(token).UserId ? (
                <div>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => cancleOrder(props.orderId)}
                  >
                    Cancel
                  </button>
                  {props.status === true ? (
                    <button
                      className="btn btn-outline btn-success ml-3"
                      onClick={() => successOrder(props.orderId)}
                    >
                      Success
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ) : props.status === true ? (
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => denyOrder(props.orderId)}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => takeOrder(props.orderId)}
                >
                  Take Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
