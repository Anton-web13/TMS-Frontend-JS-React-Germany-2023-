import {Link} from "react-router-dom";
import {startCase} from "lodash";
import {useLocation} from "react-router-dom"

import styles from './styles.module.scss';
import {ROUTE_NAMES} from "../../routers/routeNames";

const Header = () => {
    const {pathname} = useLocation();
    return (
        <div className={styles.wrapper}>
            {Object.entries(ROUTE_NAMES).map(([routeNAme, path]) => (
                <Link key={path}
                      to={path}
                      className={styles.navLink}
                      style={{background: path === pathname ? "blue" : "black"}}>
                    {startCase(routeNAme)}
                </Link>

            ))}
        </div>
    );
};

export default Header;