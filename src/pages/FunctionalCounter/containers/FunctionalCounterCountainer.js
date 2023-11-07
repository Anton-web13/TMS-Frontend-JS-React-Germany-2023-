import {useState, useEffect, useCallback} from "react";

import CounterView from "../../../components/CounterView";
import {useCounter} from "../../../hooks";

const FunctionalCounterCountainer = () => {
    // const {
    //     countValue,
    //     handleIncrement,
    //     handleDecrement,
    //     handleReset
    // } = useCounter(0);

    // const [countValue, setContValue] = useState(0);
    const {countValue,
        handleIncrement,
        handleDecrement,
        handleReset,
    } = useCounter(0);

    const [date, setDate] = useState(new Date().getSeconds());

    useEffect(() => {
        let interval = setInterval(() => {
            setDate(new Date().getSeconds());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    // const handleIncrement = useCallback( () => {
    //     setContValue(countValue + 1);
    // }, [countValue]);

    // const handleIncrement = useCallback( () => {
    //     setContValue((state) => state + 1);
    // }, []);

    // const handleIncrement = () => {
    //     setContValue(countValue + 1);
    // };

    // const handleDecrement = () => {
    //     setContValue(countValue - 1);
    // };


    //
    // const handleReset = () => {
    //     setContValue(0);
    // };

    // console.log(date);


    return <CounterView
        counterValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
    />;
};

export default FunctionalCounterCountainer;