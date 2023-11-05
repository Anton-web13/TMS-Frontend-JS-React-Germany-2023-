import {Component, memo} from "react";
import CounterView from "../../../components/CounterView";
import Layout from "../components/Layout";

class CounterContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            isBlocked: false,
            isEven: true,
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const currentValue = this.state.countValue;

        if (prevState.countValue !== currentValue) {
            this.setState({isEven: currentValue % 2 === 0});
        }
    }

    handleIncrement = () => {
        // if (this.state.countValue < 5) {
        //     this.setState((previousState) => {
        //         const incrementedValue = previousState.countValue + 1;
        //
        //         return {
        //             countValue: incrementedValue,
        //         }
        //
        //     })
        // }

        this.setState(({countValue: this.state.countValue + 1}), () => {
            alert('Hello!')
        });
    }

    handleReset = () => {
        this.setState({countValue: 0});
    }

    handleDecrement = () => {
        // const differnce = this.state.countValue - 6;
        // this.setState(({countValue: differnce < 0 ? 0 : differnce}));

        if (this.state.countValue > 0) {
            this.setState(({countValue: this.state.countValue - 1}));
        }
    }

    render() {
        const { state, handleReset, handleIncrement, handleDecrement} = this;
        const {countValue, isEven} = state;

        const user = {
            name: 'Alex',
            address: {
                city: 'Minsk',
            },
        }

        return <div>
            <Layout
                handleReset={handleReset}
                counterValue={countValue}
                handleIncrement={handleIncrement}
                someObj={{a: 1, b: 'Hello'}}
                someValue={user}
                handleDecrement={handleDecrement}
                isEven={isEven}
            />
        </div>
    }
}

export default CounterContainer;