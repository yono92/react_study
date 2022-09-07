import React, { useState } from "react";

function ConfirmButton2(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
        console.log("함수 컴포넌트 발동");
    };
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인가기"}
        </button>
    );
}

export default ConfirmButton2;
