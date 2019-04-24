import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WordList from './WordList';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            results: []
        };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    onSearchSubmit = async (url) => {
        // console.log('url: ',url);
        this.setState({url: url});
        // const response = await axios.get('https://ancient-brook-39367.herokuapp.com/api/wordcount',{
        const response = await axios.get('/api/wordcount',{
            params: {
                query: url
            },
        });
        this.setState({results: response.data});
        console.log('results: ',this.state.results);
    }
    render() {
        return (
            <div>
                <h2>word count</h2>
                <p>Please enter full URL such as https://www.google.com</p>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <p>Word count: {this.state.results[0]}</p>
                <WordList wordStatus={this.state.results[1]}/>
            </div>
        );
    }
}

export default App;
