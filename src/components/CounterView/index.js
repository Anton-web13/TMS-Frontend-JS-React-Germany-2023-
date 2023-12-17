import {memo} from "react";
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CounterView = ({
                         id,
                         counterValue,
                         handleIncrement,
                         handleReset,
                         handleDecrement,
                         isEven,
                         handleRemove,
}) => {

    console.log("Counter Render")
    return (
        <div className={styles.wrapper} style={{background: isEven ? 'darkgrey' : 'darkorange'}}>
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{isEven ? 'Even' : 'Odd'}</div>

            <div className={styles.controlButtons}>
                <button className={styles.controlButton} onClick={() => handleDecrement(id)}>-</button>
                <button className={styles.controlButton} onClick={() => handleReset(id)} >Reset</button>
                <button className={styles.controlButton} onClick={() => handleIncrement(id)} >+</button>

                {/*<button onClick={handleClick}>Click</button>*/}
            </div>
            {handleRemove &&
                <button style={{background: 'red'}} onClick={() => handleRemove(id)}>Remove!</button>
            }
        </div>
    );
};

// CounterView.defaultProps = {
//     x: 'Hello!',
// }

CounterView.propTypes = {
    id: PropTypes.string.isRequired,
    counterValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    // someObj: PropTypes.shape({
    //     a: PropTypes.number,
    //     b: PropTypes.string,
    // })

}

export default memo(CounterView);