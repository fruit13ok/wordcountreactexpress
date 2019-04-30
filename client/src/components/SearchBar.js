import React from 'react';
class SearchBar extends React.Component{
    state = { url: 'https://www.google.com'};
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.url);
    };
    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                <label>URL Search</label>
                    <input 
                        type='text' 
                        value={this.state.url}
                        onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <input type="submit" value="Submit" />
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;