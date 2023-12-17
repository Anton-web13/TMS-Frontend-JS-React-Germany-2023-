import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types";
import CounterView from "../../../../components/CounterView";


const Layout = ({
                    counters,
                    handleCounterCreate,
                    handleReset,
                    handleCounterRemove,
                    handleIncrement,
                    handleDecrement,
                    handleRemoveAllCounters,
                    totalSum,
                }) => {

    const average = counters.length > 0
        ? totalSum / counters.length
        : 0;

        return (
        <div>
            <h1>Counters Manager</h1>

            <div className={styles.stats}>
                <p>TOTAL: {totalSum}</p>
                <p>AVERAGE: {average}</p>
                <p>COUNTERS AMOUNT: {counters.length}</p>
            </div>
            <div>
                <button onClick={handleCounterCreate}>Create Counter</button>
                <button onClick={handleRemoveAllCounters}>Reset</button>
            </div>

            <div className={styles.countersArea}>
                {counters.map(({id, countValue}) => (
                    <CounterView
                        id={id}
                        key={id}
                        counterValue={countValue}
                        handleIncrement={handleIncrement}
                        handleReset={handleReset}
                        handleDecrement={handleDecrement}
                        handleRemove={handleCounterRemove}
                    />
                ))}
            </div>
        </div>
    );
};

Layout.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        countValue: PropTypes.number,
    }).isRequired
    ).isRequired,
    handleCounterCreate: PropTypes.func,
    handleReset: PropTypes.func,
}

export default Layout;