import React, {useState, useRef} from "react";
// importing components
import { Controls, Player, Footer, Library } from './container';
import { Navbar } from './components';
// importing data 
import data from './util';
import './App.css';

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);

  const onTimeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo( {...songInfo, currentTime, duration});
  }

  // Auto-Skip 
  // const onEndHandler = async () => {
  //   let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  //   let nextSongId;
  //   setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  //   nextSongId = songs[(currentIndex + 1) % songs.length].id;
  //   // add active state
  //   const newSongs = songs.map((state) => {
  //     if(state.id === nextSongId){
  //         return{
  //             ...state,
  //             active: true,
  //         }
  //     }
  //     else{
  //         return{
  //             ...state,
  //             active: false,
  //         }
  //     }
  // })

  // setSongs(newSongs);
  // if(isSongPlaying) audioRef.current.play();

  // }

  return (
    <div className="app">
      <div className="wrapper flex">
        <Navbar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
        <Player name={currentSong.name} artist={currentSong.artist} cover={currentSong.cover} id={currentSong.id} />
        <Controls 
          audioRef={audioRef}
          isSongPlaying={isSongPlaying}
          setIsSongPlaying={setIsSongPlaying}
          songs={songs}
          setSongs={setSongs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          />
        <Footer />
        <Library 
          songs={songs}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isSongPlaying={isSongPlaying}
          libraryStatus={libraryStatus}
        />
      </div>
      <audio 
          onTimeUpdate={onTimeUpdateHandler}
          onLoadedMetadata={onTimeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          // onEnded={onEndHandler}
        >
        </audio>
    </div>
  );
}

export default App;
