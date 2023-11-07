import React from 'react';
import {Fragment} from "react";
import {useCounter} from "../../../hooks";
import FunctionalCounterCountainer from "../../FunctionalCounter/containers/FunctionalCounterCountainer";
import CounterContainers from "../../Counter/containers/CounterContainers";
import CounterView from "../../../components/CounterView";

const HomePageContainers = () => {
    const {
        countValue,
        handleIncrement,
        handleDecrement,
    } = useCounter(0);

    const isDisabled = countValue === 0;

    return (
        <>
            <h1>Home</h1>

            <p>{countValue}</p>
            <button
                disabled={isDisabled}
                onClick={isDisabled ? () => {} : handleDecrement}
            >-</button>
            <button onClick={handleIncrement}>+</button>

            {/*<CounterView*/}
            {/*    countValue={countValue}*/}
            {/*    handleIncrement={handleIncrement}*/}
            {/*    handleDecrement={handleDecrement}*/}
            {/*/>*/}


            {/*<p>{countValue}</p>*/}
            {/*<button onClick={() => handleAddAmount(5)}>+</button>*/}
            {/*<button onClick={() => handleAddAmount(10)}>+</button>*/}
            {/*<button onClick={() => handleAddAmount(15)}>+</button>*/}
        </>


    // <div>
    //     <h1>Home</h1>
    //     {/*<p>{countValue}</p>*/}
    //     <button onClick={() => handleAddAmount(5)}>+</button>
    //     <button onClick={() => handleAddAmount(10)}>+</button>
    //     <button onClick={() => handleAddAmount(15)}>+</button>
    // </div>
    );
};

export default HomePageContainers;