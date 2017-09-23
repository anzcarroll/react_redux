import React, { Component } from 'react';




class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }
    _onInputChange = (e) => {
        this.setState({ term : e.target.value })
    }
    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={this._onInputChange} 
                />
            </div>
        );
    }
}

export default SearchBar;