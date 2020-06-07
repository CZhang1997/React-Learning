import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [], error: ''};
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
            
        });
        //  first way
        // .then ((response) => {
        //     console.log(response.data.results);
        // });
        if(!response.data.results.length)
        {
            this.setState({error: "No Picture was found for " + term})
        }
        else
        {
            this.setState({images : response.data.results, error : ''})
        }


    }
    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            {!this.state.error ? <ImageList images={this.state.images}/> : this.state.error}
            </div>
        
        );
    }
}

export default App;