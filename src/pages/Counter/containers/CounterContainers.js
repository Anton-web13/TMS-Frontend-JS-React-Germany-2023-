import {Component} from "react";
import CounterView from "../components/CounterView";
import Layout from "../components/Layout";

class CounterContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            multiplied: 0,
        }
    }

    handleIncrement = () => {
        // this.setState({countValue: this.state.countValue + 1});

        // this.setState({
        //     countValue: this.state.countValue + 1,
        //     multiplied: this.state.countValue * 10,
        // });

        this.setState((previousState) => {
            const incrementedValue = previousState.countValue + 1;
            const multipliedValue = incrementedValue * 10;

            return {
                countValue: incrementedValue,
                multiplied: multipliedValue,
            }

        })
    }

    handleReset = () => {
        this.setState({countValue: 0});
    }


    render() {
        return <div>
            <Layout
                counterValue={this.state.countValue}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
            />
        </div>
    }
}

export default CounterContainer;