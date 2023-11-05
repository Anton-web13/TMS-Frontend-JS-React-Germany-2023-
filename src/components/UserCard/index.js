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

function USerCard({name, age, image, someObject}) {
    return (
        <div className={`${styles.wrapper} ${styles.background}`}>
            <img src={image} alt={"Woman ALL"} width={150} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            {/*<div>*/}
            {/*    {children}*/}
            {/*</div>*/}
        </div>
    );
}

USerCard.propTypes = {
    name: PropTypes.any,
    age: PropTypes.any,
    image: PropTypes.any,
    children: PropTypes.any
}

export default memo(USerCard);
// export default USerCard;




