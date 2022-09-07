import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [cnt, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called");
        console.log(`isFull:${isFull}`);
    });

    useEffect(() => {
        setIsFull(cnt >= MAX_CAPACITY);
        console.log("=========================");
        console.log(`Current cnt value : ${cnt}`);
    }, [cnt]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${cnt}명을 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
