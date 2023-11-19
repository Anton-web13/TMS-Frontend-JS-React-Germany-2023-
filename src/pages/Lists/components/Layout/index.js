import UserCard from "../../../../components/UserCard";
import PropTypes from "prop-types";

const Layout = ({users, handleAddUser, handleRemove, handleBlockUser}) => {
    // const x = 5;

    return (
        <div>
            <h1>Lists</h1>

            <button onClick={handleAddUser}>Add User</button>
            {/*<button onClick={() => someMethod(x)}>Some Method</button>*/}

            {users.map(({name, age, id, isBlocked}) => {
                return <UserCard
                    key={id}
                    name={name}
                    age={age}
                    id={id}
                    isBlocked={isBlocked}
                    onDelete={handleRemove}
                    onBlock={() => handleBlockUser(id)}
                />;
            })}
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