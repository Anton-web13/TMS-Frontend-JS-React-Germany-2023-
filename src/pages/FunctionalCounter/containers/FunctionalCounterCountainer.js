import {useState, useEffect} from "react";

import CounterView from "../../../components/CounterView";

const FunctionalCounterCountainer = () => {
    // const [counterState, setcounterState] = useState({
    //     countValue: 0,
    //     x: 'sertsertse',
    // });
    //
    // console.log(counterState);
    //
    // const handleIncrement = () => {
    //     setcounterState({
    //         ...counterState,
    //         countValue: counterState.countValue + 1
    //     })
    // }
    //
    // const handleDecrement = () => {
    //     // setCounterValue((state) => ({
    //     //     countValue: state.countValue - 1,
    //     // }));
    //
    //     setcounterState((state) => {
    //         return {
    //             ...state,
    //             countValue: state.countValue - 1,
    //         }
    //     });
    // }

    const [count, setCount] = useState(0);
    const [someValue, setSomeValue] = useState(false);


    const handleIncrement = () => {
        setCount((prevState) => {

            return prevState + 1;
        });
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    useEffect(() => {
        console.log('Did mount')
    }, [])

    useEffect(() => {
        setSomeValue(!someValue);
    }, [count])

    console.log(someValue);

    return <CounterView
        counterValue={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
    />;
};

export default FunctionalCounterCountainer;