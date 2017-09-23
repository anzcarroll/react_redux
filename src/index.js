import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YOUTUBE_KEY from './../.env';
import YTSearch from 'youtube-api-search';

YTSearch({key: YOUTUBE_KEY, term: 'food'}, function(data){
console.log(data);
})
const App = () => {
    return <div>
        <div>HELLLLO</div>
        <SearchBar />

    </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));

