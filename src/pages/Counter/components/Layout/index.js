import Header from "../../../../components/Header";
import CounterView from "../../../../components/CounterView";
import UserCard from "../../../../components/UserCard";

const Layout = ({
                    counterValue,
                    handleIncrement,
                    handleReset,
                    handleDecrement,
                    isEven
}) => {
    return (
        <div>
            <div style={{marginBottom: 25}}>
                <CounterView
                    handleReset={handleReset}
                    counterValue={counterValue}
                    handleIncrement={handleIncrement}
                    someObj={{a: 1, b: 'Hello'}}
                    handleDecrement={handleDecrement}
                    isEven={isEven}
                />
            </div>

            <UserCard name={'Alex'} age={25} someObject={{a: 1}}/>
        </div>
    );
};

export default Layout;