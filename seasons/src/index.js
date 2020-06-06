import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this is the only time do direct assignment, is when you create it
        //this.state = { lat: null, errorMessage: '' };

    }
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude}),
            error => this.setState( {errorMessage : error.message})
        );
    }
    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>
                Error: {this.state.errorMessage}
                </div>
        }
        
        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner text="Please allow the loaction request"/>;
    }
    // must define
    render () {
    return <div className="border red">{this.renderContent()}</div>;
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));