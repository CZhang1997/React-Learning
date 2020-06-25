// Reducers

import { combineReducers } from "redux";
import { selectSong } from "../actions";

const songsReducer = () => {
    return [
        { title: 'song 1', duration: '4:02'},
        { title: 'song 2', duration: '2:02'},
        { title: 'song 3', duration: '3:02'},
        { title: 'song 4', duration: '4:32'},
        { title: 'song 5', duration: '1:02'},
        { title: 'song 6', duration: '5:12'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECYED')
    {
        return action.payload;
    }

    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
});