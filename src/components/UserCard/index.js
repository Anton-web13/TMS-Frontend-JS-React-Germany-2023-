// import {PureComponent, memo} from "react";
//
// import styles from './styles.module.scss';
// import * as PropTypes from "prop-types";
//
// const greetings = 'Hello';
//
// class USerCard extends PureComponent {
//     render() {
//         let {name, age, image, children} = this.props;
//         console.log('USer Cars Rendered');
//
//         return (
//             <div className={`${styles.wrapper} ${styles.background}`}>
//                 <img src={image} alt={"Woman ALL"} width={150} height={150}/>
//                 <h1 className={styles.name}>User name: {name}</h1>
//                 <h2 className={styles.age}>Age: {age}</h2>
//
//                 {/*<div>*/}
//                 {/*    {children}*/}
//                 {/*</div>*/}
//             </div>
//         );
//     }
// }
//
// USerCard.propTypes = {
//     name: PropTypes.any,
//     age: PropTypes.any,
//     image: PropTypes.any,
//     children: PropTypes.any
// }
//
// export default memo(USerCard);
// // export default USerCard;







import {memo} from "react";

import styles from './styles.module.scss';
import * as PropTypes from "prop-types";

const greetings = 'Hello';

function USerCard({id, name, age, image, isBlocked, onDelete, onBlock}) {
    return (
        <div className={`${styles.wrapper} ${styles.background}`}
             style={{background: isBlocked ? 'red' : "white"}}
        >
            <h3 className={styles.id}>ID: {id}</h3>
            <img src={image} alt={"Woman ALL"} width={150} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={onBlock}>Block User!</button>

            {/*<div>*/}
            {/*    {children}*/}
            {/*</div>*/}
        </div>
    );
}

USerCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
    isBlocked: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
}

export default memo(USerCard);
// export default USerCard;




