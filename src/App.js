import React, {useState, useRef} from "react";
// importing components
import { Controls, Player, Footer, Library } from './container';
import { Navbar } from './components';
// importing data 
import data from './util';
import './App.css';

import useArtistSong from './hooks/useArtistSong';

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [searchItem, setSearchItem] = useState("");

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
  // const handleSearch = (searchItem){
  //   setSearchItem(searchItem);
  //   setTimeout(() => {
      
  //   }, 500);
  //   const info=useArtistSong(searchItem);


  // }
  return (
    <div className="app">
      <div className="wrapper flex">
        <Navbar 
            libraryStatus={libraryStatus} 
            setLibraryStatus={setLibraryStatus} 
            searchItem={searchItem} 
            setSearchItem={setSearchItem}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            songs={songs}
            />
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
