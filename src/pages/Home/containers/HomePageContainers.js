import React from 'react';
import {Fragment} from "react";
import {useCounter} from "../../../hooks";
import FunctionalCounterCountainer from "../../FunctionalCounter/containers/FunctionalCounterCountainer";
import CounterContainers from "../../Counter/containers/CounterContainers";

const HomePageContainers = () => {
    const {
        countValue,
        handleAddAmount,
    } = useCounter(0, true);

    return (
        <>
            <h1>Home</h1>


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