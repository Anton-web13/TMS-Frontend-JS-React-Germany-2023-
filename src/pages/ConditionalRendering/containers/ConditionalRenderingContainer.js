import {Component} from 'react';
import Layout from "../components/Layout";

class ConditionalRenderingContainer extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //     }
    // }

    state = {
        isActive: false,
        isBlurEnable: false,
    };

    timeOut = null;

    handleActiveToggle = () => {
        this.setState({isActive: !this.state.isActive});
    }

    handleBlurActive = () => {
        this.timeOut = setTimeout(() => {
            this.setState({isBlurEnable: !this.state.isBlurEnable});
        }, 2000);
    }

    handleBlurUnActive = () => {
        clearTimeout(this.timeOut);
    }

    render() {
        return (
            <Layout
                isActive={this.state.isActive}
                isBlurEnable={this.state.isBlurEnable}
                handleClick={this.handleActiveToggle}
                handleBlurActive={this.handleBlurActive}
                handleBlurUnActive={this.handleBlurUnActive}
            />
        );
    }
}

export default ConditionalRenderingContainer;