function ScoreboardBoxSpecial(props) {
    return (
        <div>
            <div className="fixed font-bold text-2xl w-screen py-8 rounded-t-2xl shadow-2xl bottom-0 left-0 flex justify-between items-center" style={{ backgroundColor: props.color }}>
                <div className="text-gray-700 text-4xl pl-16 justify-self-start" title="place">{props.place}</div>
                <img className="absolute bottom-5 left-[150px] rounded-full border-2 border-black" src={props.picture} alt="user picture" width="120px"></img>
                <div className="text-left text-4xl w-1/2" title="name">{props.name}</div>
                <div className="pr-40 text-4xl" title="score">{props.score}</div>
            </div>
        </div>
    );
}

export default ScoreboardBoxSpecial;