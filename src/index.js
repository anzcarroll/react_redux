import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YOUTUBE_KEY from './../.env';


const App = () => {
    return <div>
        <div>HELLLLO</div>
        <SearchBar />

    </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));

