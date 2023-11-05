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

        console.log('Constructor initialisation');
    }

    componentDidMount() {
        console.log('Did Mount');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('Should Component Update? true');
    //     return true;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Did Update');
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }


    handleIncrement = () => {
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
        console.log('Render');

        return <div>
            <Layout
                handleReset={this.handleReset}
                counterValue={this.state.countValue}
                handleIncrement={this.handleIncrement}
                someObj={{a: 1, b: 'Hello'}}
            />
        </div>
    }
}

export default CounterContainer;