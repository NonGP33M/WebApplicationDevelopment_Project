function MyOrderBox(props) {
    const handleDelete = () => {
        props.onDelete(props.orderId);
      }
    return (
        <div>
          <div className='inOrderBox' class="inOrderBox inline-block w-3/5 min-h-0 bg-black border border-gray-300 rounded p-2">
            <h4 class='text-white'>[{props.StoreN}]</h4>
            <p class='text-white'>Order : {props.OrderN}</p>
            <p class='text-white'>Delivery place : {props.Deli}</p>
            <button onClick={handleDelete} class='bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black-700 rounded'>Delete</button>
            </div>
        </div>
      );
  }
  export default MyOrderBox;
