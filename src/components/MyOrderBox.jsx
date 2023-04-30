function MyOrderBox(props) {
    const handleDelete = () => {
        props.onDelete(props.orderId);
      }
    return (
        <div>
          <div className='inOrderBox' class="mb-[10px] inOrderBox inline-block w-3/5 min-h-0 bg-black border border-gray-300 rounded p-2">
            <h4 class='text-white'><strong>[{props.StoreN}]</strong></h4>
            <p class='text-white'><strong>Order :</strong> {props.OrderN}</p>
            <p class='text-white'><strong>Delivery place :</strong> {props.Deli}</p>
            <div className="flex justify-between ...">
                <button onClick={handleDelete} class='mt-[5px] bg-red-500 hover:bg-gray-700 text-white font-bold py-1 px-4 border border-black-700 rounded'>Delete</button>
                <div className="flex items-center">
                    <p className="text-white text-lg font-bold mr-2">Status:</p>
                        <p className={`${props.status === 'REQUESTED' ? 'text-yellow-400' :
                                        props.status === 'ACCEPTED' ? 'text-blue-400' :
                                        props.status === 'DELIVERED' ? 'text-green-400' : ''}
                                        font-bold text-xl mr-4`}>{props.status}</p>
                </div>
            </div>
          </div>
        </div>
      );
  }
  export default MyOrderBox;
