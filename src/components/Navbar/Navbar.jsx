import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaMusic, FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
// import custom hook


import './Navbar.css'

const Navbar = ({
  libraryStatus,
  setLibraryStatus,
  searchItem = "Search Artist Name",
  setSearchItem,
  setSongs,
  setCurrentSong

}) => {
  // useState
  const [buttonText, setButtonText] = useState(false);
  const handleSearch = async (searchItem)=>{
    if(searchItem.length===0){
      setSearchItem("");
      return;
    }
    setSearchItem(searchItem);
    setTimeout(() => {
      
    }, 1000);
    console.log(searchItem);
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchItem}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd8e1587a50mshc715026af8cc3a8p1e6efajsnc39e5fa372e5',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
    let info={};
    try {
      const response = await fetch(url, options);
      const result = await (response.json());
      info=result.data;
    } catch (error) {
      console.error(error);
    }
    let newSongList=[];
    for(let i=0;i<info?.length;i++){
      let obj={
        id: uuidv4(),
        name: "Cabriolet",
        artist: searchItem,
        cover: "https://cms.chillhop.com/media/55271/squarelfc12929e0fc98502a9ae1f1970bd79006ab343c7.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
        active: false,
        color: ['#C4B54E','#DEDFB7']
      }
      for(let key in info[i]){
          if(key==="preview"){
              obj.audio=info[i][key];
          }
          if(key==="album"){
              for(let k in info[i][key]){
                  // if(k==="id") obj.id=info[i][key][k];
                  if(k==="title") obj.name=info[i][key][k];
                  if(k==="cover_xl") obj.cover=info[i][key][k];
              }
          }
      }
      newSongList.push(obj);
    }
    setSongs(newSongList);
    setCurrentSong(newSongList[0]);
  }
  

  const libraryButtonClickHandler = () => {
    setLibraryStatus(!libraryStatus);
    setButtonText(!buttonText);
  };

 
  
  return (
    <div className="app-navbar flex justify-between align-middle">
      <div className="app-navbar-logo">
        <h1>Lyrical</h1>
      </div>

      <div >
          <input
            type="text"
            className="searchBar"
            placeholder="Search Artist Name"
            value={searchItem}
            onChange={(e)=> handleSearch(e.target.value)}
          />
      </div>
      <div>
        <button className="button flex" onClick={libraryButtonClickHandler}>
          {buttonText ? "Close" : "Library"} <FaMusic />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
