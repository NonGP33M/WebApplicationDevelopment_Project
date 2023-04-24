function ScoreboardBox(props) {
    return (
        <div>
            <div className="relative font-bold text-2xl w-full py-4 rounded-3xl shadow-2xl mt-16 flex justify-between items-center" style={{ backgroundColor: props.color }}>
                <div className="text-gray-700 text-4xl pl-16 justify-self-start" title="place">{props.place}</div>
                <img className="absolute bottom-[-26px] left-[150px] rounded-full border-2 border-black" src="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" alt="user picture" width="120px"></img>
                <div className="pl-40 justify-self-start text-left w-1/2" title="name">{props.name}</div>
                <div className="pr-40" title="score">{props.score}</div>
            </div>
        </div>
    );
}

export default ScoreboardBox;