import {Link} from "react-router-dom";
import {startCase} from "lodash";

import styles from './styles.module.scss';
import {ROUTE_NAMES} from "../../routers/routeNames";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            {Object.entries(ROUTE_NAMES).map(([routeNAme, path]) => (
                <Link key={path} to={path} className={styles.navLink}>
                    {startCase(routeNAme)}
                </Link>

            ))}
            {/*<Link to={ROUTE_NAMES.HOME} className={styles.navLink}>Home page</Link>*/}
            {/*<Link to={ROUTE_NAMES.COUNTER} className={styles.navLink}>Counter page</Link>*/}
            {/*<Link to={ROUTE_NAMES.CONDITIONAL_RENDERING} className={styles.navLink}>CONDITIONAL RENDERING</Link>*/}
        </div>
    );
};

export default Header;