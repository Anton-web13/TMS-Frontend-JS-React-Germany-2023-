import {useCallback, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from 'uuid';
import {isEven} from "../../../utils";

const CountersManagerContainer = () => {
    const [counters, setCounters] = useState([]);

    const handleCounterCreate = () => {
        const newCounter = {
            id: uuid(),
            countValue: 0,
        };

        // setCounters((state) => [...state, newCounter]);

        setCounters((state) => {
            const updatedCounters = state.map((counter) => {
                if (isEven(counter.countValue)) {
                    return {
                        ...counter,
                        countValue: counter.countValue += 1,
                    }
                }

                return counter;
            })

            // return [...updatedCounters, newCounter];

            updatedCounters.push(newCounter);

            return updatedCounters;
        });
    };

    const handleCounterRemove = useCallback((counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);
            const counterIndexRemove = countersCope.findIndex(({id}) => id === counterId);

            countersCope.splice(counterIndexRemove, 1);

            return countersCope.map((counter) => {
                return {
                    ...counter,
                    countValue: !isEven(counter.countValue)
                        ? counter.countValue - 1
                        : counter.countValue,
                }
            });
        })
    }, []);

    const handleIncrement = useCallback((counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);
            const foundCounter = countersCope.find(({id}) => id === counterId);

            foundCounter.countValue += 1;

            return countersCope;
        })
    }, []);

    const handleDecrement = useCallback((counterId) => {
        setCounters((state) => {
            const counterCopy = structuredClone(state);
            const foundCounter = counterCopy.find(({id}) => id === counterId);

            if (foundCounter.countValue > 0) {
                foundCounter.countValue = foundCounter.countValue - 1;
            }

            return counterCopy;
        })
    },[]);

    const handleReset = useCallback((counterId) => {
        setCounters((state) => {
            const counterCopy = structuredClone(state);
            const foundCounter = counterCopy.find(({id}) => id === counterId);

            foundCounter.countValue = 0;
            return counterCopy;
        })
    },[]);

    const handleRemoveAllCounters = () => {
        setCounters([]);
    }

    const totalSum = counters.reduce((result, {countValue}) => {
        return countValue + result;
    }, 0)


    return <Layout
        counters={counters}
        handleCounterCreate={handleCounterCreate}
        handleReset={handleReset}
        handleCounterRemove={handleCounterRemove}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleRemoveAllCounters={handleRemoveAllCounters}
        totalSum={totalSum}
    />;
};

export default CountersManagerContainer;