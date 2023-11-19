import {Fragment, useCallback, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from 'uuid';
import {cloneDeep} from "lodash";
import {random} from "lodash";
import {calcAverage} from "../../../utils/calcAverage";


// const numbers = [1,2,3,4,5];

// const usersList = Array.from({length: 5000}, () => {
//     return {
//         id: uuid(),
//         name: 'Alex',
//         age: new Date().getMilliseconds(),
//         isBlocked: false,
//     }
// })

const ListContainer = () => {
    const [users, setUsers] = useState([]);

    // return <div style={{padding: 25}}>
    //     {numbers.map((number, index) => {
    //         return (
    //             <Fragment key={index}>{number}</Fragment>
    //         )
    //     })}
    // </div>;


    const handleAddUser = useCallback(() => {

        const newUser = {
            id: uuid(),
            name: 'Alex',
            age: random(1,80, false),
            isBlocked: false,
        };

        // const stateCopy = [...users];
        // stateCopy.push(newUser);
        // setUsers(stateCopy);

        setUsers((state) => [...state, newUser])

        // setUsers([...users, newUser]);
    }, [])

    const handleRemove = useCallback((id) => {
        setUsers((state) => {
            const usersCopy = cloneDeep(state);
            const userIndexToRemove = usersCopy.findIndex((user) => user.id === id)
            usersCopy.splice(userIndexToRemove, 1);

            return usersCopy;
        })

    }, [])

    const handleBlockUser = useCallback((id) => {
        // const usersCopy = [...users];


        setUsers((state) => {
            const usersCopy = cloneDeep(state);

            const foundUser = usersCopy.find((user) => user.id === id);

            console.log(users);
            console.log(usersCopy);

            foundUser.isBlocked = true;

            return usersCopy;
        })

    }, [])


    return <Layout
        users={users}
        handleAddUser={handleAddUser}
        handleRemove={handleRemove}
        handleBlockUser={handleBlockUser}
        // averageUserAge={averageUserAge}
    />;
};

export default ListContainer;

// C - create;  POST
// R - read;    GET
// U - update;  PUT/PATCH
// D - delete;  DELETE

