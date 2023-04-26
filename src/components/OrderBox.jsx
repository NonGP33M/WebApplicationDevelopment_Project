function OrderBox(props) {
  const handleTakeOrder = () => {
    props.onTakeOrder(props.orderId);
  };

  return (
    <div>
      <div className="inOrderBox inline-block w-3/5 min-h-0 bg-black border border-gray-300 rounded p-2">
        <h4 class='text-white'>[{props.StoreN}]</h4>
        <p class='text-white'>Order : {props.OrderN}</p>
        <p class='text-white'>Delivery place : {props.Deli}</p>
        <p class='text-white'>Score : {props.Score}</p>
        <div class='flex justify-between ...'>
          <span class='text-white'>Order by: {props.Username}</span>
          <button onClick={handleTakeOrder} class='bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black-700 rounded'>Take Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
