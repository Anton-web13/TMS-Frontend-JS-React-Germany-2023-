import {memo} from "react";
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CounterView = ({
         counterValue,
         handleIncrement,
         handleReset,
         handleDecrement,
         isEven
}) => {
    return (
        <div className={styles.wrapper} style={{background: isEven ? 'red' : 'green'}}>
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{isEven ? 'Even' : 'Odd'}</div>

            <div className={styles.controlButtons}>
                <button className={styles.controlButton} onClick={handleDecrement}>-</button>
                <button className={styles.controlButton} onClick={handleReset} >Reset</button>
                <button className={styles.controlButton} onClick={handleIncrement} >+</button>

                {/*<button onClick={handleClick}>Click</button>*/}
            </div>

        </div>
    );
};

// CounterView.defaultProps = {
//     x: 'Hello!',
// }

CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    // someObj: PropTypes.shape({
    //     a: PropTypes.number,
    //     b: PropTypes.string,
    // })

}

export default memo(CounterView);