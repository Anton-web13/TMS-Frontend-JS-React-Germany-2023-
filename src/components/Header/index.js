import {Link} from "react-router-dom";

import styles from './styles.module.scss';
import {ROUTE_NAMES} from "../../routers/routeNames";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link to={ROUTE_NAMES.HOME} className={styles.navLink}>Home page</Link>
            <Link to={ROUTE_NAMES.COUNTER} className={styles.navLink}>Counter page</Link>
        </div>
    );
};

export default Header;