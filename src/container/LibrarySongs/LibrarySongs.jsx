import React from "react";

import './LibrarySongs.css';

const LibrarySongs = ({song, songs, setSongs, setCurrentSong, audioRef, isSongPlaying, id}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // add active state
        const newSongs = songs.map((state) => {
            if(state.id === id){
                return{
                    ...state,
                    active: true,
                }
            }
            else{
                return{
                    ...state,
                    active: false,
                }
            }
        })
    
        setSongs(newSongs);
        // checking ifsong is playing or not
        if(isSongPlaying) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`library-song flex ${ song.active ? 'selected' : '' }`}>
            <img className="library-cover-img" src={song.cover} alt={song.name} />
            <div className="library-song-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySongs;