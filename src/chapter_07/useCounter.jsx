import React, { useState } from "react";

function useCounter(InitialValue) {
    const [cnt, setCnt] = useState(InitialValue);

    const increaseCount = () => setCnt((cnt) => cnt + 1);
    const decreaseCount = () => setCnt((cnt) => Math.max(cnt - 1, 0));

    return [cnt, increaseCount, decreaseCount];
}

export default useCounter;
