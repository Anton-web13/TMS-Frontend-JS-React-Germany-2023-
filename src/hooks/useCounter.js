import {useEffect, useState} from "react";

const useCounter = (initialValue, trackCountChanges = false) => {
    const [countValue, setContValue] = useState(initialValue);

    const handleIncrement = () => {
        setContValue(countValue + 1);
    };

    const handleDecrement = () => {
        setContValue(countValue - 1);
    };

    const handleReset = () => {
        setContValue(0);
    };

    const handleAddAmount = (amount) => {
        setContValue(countValue + amount);
    }

    useEffect(() => {
        if (trackCountChanges) {
            console.log(`Value was changed. Current Value is ${countValue}`);
        }
    }, [countValue]);

    return {
        countValue,
        handleIncrement,
        handleDecrement,
        handleReset,
        handleAddAmount
    };
};

export default useCounter;