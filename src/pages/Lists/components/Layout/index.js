import UserCard from "../../../../components/UserCard";
import PropTypes from "prop-types";

import styles from 'pages/Lists/components/Layout/styles.module.scss'
import {useEffect, useMemo} from "react";
import {calcAverage} from "../../../../utils/calcAverage";
import {collectUserIds} from "../../../../utils/collectUserIds";

const Layout = ({
                    users,
                    handleAddUser,
                    handleRemove,
                    handleBlockUser,
                    // averageUserAge,
}) => {
    // const userDetails = useMemo(() => {
    //     return {
    //         friends: ['Alex', 'max'],
    //         address: {
    //             city: 'Minsk',
    //         },
    //         a: 1,
    //         b: 2,
    //     }
    // }, []);

    // const x = 5;

    const averageUserAge = calcAverage(users);
    const userIds = useMemo(() => {
        return collectUserIds(users);
    }, [users.length]);

    useEffect(() => {
        console.log(userIds);
    }, [userIds])

    return (
        <div>
            <h1>Lists</h1>
            <h2>Average age: {averageUserAge}</h2>

            <div></div>


            <button onClick={handleAddUser}>Add User</button>
            {/*<button onClick={() => someMethod(x)}>Some Method</button>*/}

            <div className={styles.cardArea}>
                {users.map(({name, age, id, isBlocked}, index) => {
                    return <UserCard
                        key={id}
                        name={name}
                        age={age}
                        id={id}
                        isBlocked={isBlocked}
                        onDelete={handleRemove}
                        // onBlock={() => handleBlockUser(id)}
                        onBlock={handleBlockUser}
                        // userDetails={userDetails}
                    />;
                })}
            </div>


        </div>
    );
};

Layout.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }))
}


export default Layout;