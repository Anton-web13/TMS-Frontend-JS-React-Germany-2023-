import {useEffect, useState, useCallback} from "react";

const useCounter = (initialValue, trackCountChanges = false) => {
    const [countValue, setContValue] = useState(initialValue);

    const handleIncrement = useCallback(() => {
        setContValue((state) => state + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setContValue((state) => state - 1);
    }, []);

    const handleReset = useCallback(() => {
        setContValue(0);
    }, []);

    const handleAddAmount = useCallback((amount) => {
        setContValue((state) => state + amount);
    }, []);

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