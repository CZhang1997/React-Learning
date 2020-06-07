import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        // to solve this underfine when onFormSubmit is called
        // this.onFormSubmit = this.onFormSubmit.bind(this);

    }
    state = {term : ''};
    onInputChange(event) {
        this.setState({term: event.target.value});
    }
//      second way
    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    // third way make it an error function
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    SearchClick = () => {
        this.props.onSubmit(this.state.term);
    }


    render () {
        return (
        <div className='ui segment'>
            <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label>Image Search </label>
                    <input type="text" 
                    value={this.state.term} 
                    onChange={(event) => this.setState({term: event.target.value})} 
                    />
                    
                </div>
            </form>
            <button onClick={this.SearchClick} >Search</button>
        </div>
        );
    }
}



export default SearchBar;