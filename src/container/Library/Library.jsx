import React from "react";
import LibrarySongs from '../LibrarySongs/LibrarySongs';

import './Library.css';

const Library = ({ songs, setCurrentSong, audioRef, isSongPlaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library flex ${ libraryStatus ? 'active-library' : ''}`}>
            <div className="library-header">
                <h1>Library</h1>
            </div>
            <div className="library-songs">
                {songs.map((song) => {
                return (
                    <LibrarySongs 
                        key={song.id}
                        isSongPlaying={isSongPlaying} 
                        audioRef={audioRef} 
                        song={song} 
                        songs={songs} 
                        setSongs={setSongs} 
                        setCurrentSong={setCurrentSong}
                        id={song.id} 
                    />
                )})}
            </div>
        </div>
    );
}

export default Library;