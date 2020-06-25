
// Action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECYED',
        payload: song
    };

};
