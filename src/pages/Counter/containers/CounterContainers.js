import {Component} from "react";
import CounterView from "../components/CounterView";
import Layout from "../components/Layout";

class CounterContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            multiplied: 0,
            isBlocked: false,
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
        // console.log(prevState);
        //
        // if (this.state.countValue === 5 && prevState.countValue !== this.state.countValue) {
        //     this.setState({isBlocked: true});
        // }

        // if (this.state.countValue % 2 !== 0) {
        //     alert("Some data fetching...")
        // }
    }

    componentWillUnmount() {
        console.log(this.state.isBlocked);
        console.log('Unmounted');
    }


    handleIncrement = () => {
        if (this.state.countValue < 5) {
            this.setState((previousState) => {
                const incrementedValue = previousState.countValue + 1;
                const multipliedValue = incrementedValue * 10;

                return {
                    countValue: incrementedValue,
                    multiplied: multipliedValue,
                }

            })
        }

    }

    handleReset = () => {
        this.setState({countValue: 0});
    }


    render() {
        console.log('Render');

        const user = {
            name: 'Alex',
            address: {
                city: 'Minsk',
            },
        }

        return <div>
            <Layout
                handleReset={this.handleReset}
                counterValue={this.state.countValue}
                handleIncrement={this.handleIncrement}
                someObj={{a: 1, b: 'Hello'}}
                someValue={user}
            />
        </div>
    }
}

export default CounterContainer;