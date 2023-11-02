import Header from "../../../../components/Header";
import CounterView from "../CounterView";

const Layout = ({counterValue, handleIncrement, handleReset}) => {
    return (
        <div>
            <CounterView
                handleReset={handleReset}
                counterValue={counterValue}
                handleIncrement={handleIncrement}
                someObj={{a: 1, b: 'Hello'}}
            />
        </div>
    );
};

export default Layout;