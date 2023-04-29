function OrderBox(props) {
  const handleTakeOrder = () => {
    props.onTakeOrder(props.orderId);
  };

  return (
    <div>
      <div className="mb-[10px] inOrderBox inline-block w-3/5 min-h-0 bg-black border border-gray-300 rounded p-2">
        <h4 className="text-white"><strong>[{props.StoreN}]</strong></h4>
        <p className="text-white"><strong>Order :</strong> {props.OrderN}</p>
        <p className="text-white"><strong>Delivery place :</strong> {props.Deli}</p>
        <p className="text-white"><strong>Score :</strong> {props.Score}</p>
        <p className="text-white"><strong>Order by:</strong> {props.Username}</p>
        <button onClick={handleTakeOrder} className="mt-[5px] bg-green-500 hover:bg-gray-700 text-white font-bold py-1 px-4 border border-black-700 rounded">Take Order</button>
      </div>
    </div>
  );
}

export default OrderBox;
