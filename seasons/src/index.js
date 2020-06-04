import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
    constructor(props) {
        super(props);
        // this is the only time do direct assignment, is when you create it
        this.state = { lat: null, errorMessage: '' };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // change the state must use setState
                this.setState({ lat : position.coords.latitude});
            },
            error => {
                console.log(error.message);
                this.setState( {errorMessage : error.message});
            }
        );
    }
    // must define
    render () {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>
                Error: {this.state.errorMessage}
                </div>
        }
        
        if(!this.state.errorMessage && this.state.lat)
        {
            return <div>
                Latitude: {this.state.lat}
                </div>
        }
        return <div>Loading!</div>
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));