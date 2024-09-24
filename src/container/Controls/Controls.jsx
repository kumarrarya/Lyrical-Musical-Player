import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlay, FaAngleRight, FaPause } from 'react-icons/fa';
import { BsRepeat1 } from "react-icons/bs";

import './Controls.css';

const Controls = ({songs, setSongs, currentSong, setCurrentSong, setSongInfo, songInfo, isSongPlaying, setIsSongPlaying, audioRef}) => {
    const [repeat,setRepeat]=useState(false);
    // useEffect
    // useEffect(() => {
    
    // }, [currentSong]);

    // functions
    useEffect(()=>{
        if(songInfo.duration===audioRef.current.currentTime){
            console.log(repeat);
            if(repeat){
                audioRef.current.currentTime=0;
                console.log(songInfo);
                setSongInfo({...songInfo, currentTime: 0});
                if(isSongPlaying) audioRef.current.play();
            }
            else{
                onSkipHandler("skip-forward");
                if(isSongPlaying) audioRef.current.play();
            }
        }
    },[currentSong,audioRef,repeat,setSongInfo,songInfo]);
    const playSongHandler = () => {
        if(isSongPlaying){
            audioRef.current.pause();
            setIsSongPlaying(!isSongPlaying);
        }
        else {
            audioRef.current.play();
            setIsSongPlaying(!isSongPlaying);
        }
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        );
    }

    const onSkipHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        let nextSongId;
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            nextSongId = songs[(currentIndex + 1) % songs.length].id;
        }
        else if(direction === 'skip-back'){
            if(currentIndex - 1 < 0){
                await setCurrentSong(songs[songs.length - 1]);
                nextSongId = songs[songs.length - 1].id;
            }
            else{
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                nextSongId = songs[(currentIndex - 1) % songs.length].id;
            }
        }
        // add active state
        
        const newSongs = songs.map((state) => {
            if(state.id === nextSongId || repeat){
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
        // check if song is playing or not
        if(isSongPlaying) audioRef.current.play();
    }

    
    return (
        <div className="app-controls flex">
            
            <div className="progress-bar flex">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            
               {/* <div className="w-full relative"> */}
               
                <div className="flex control-buttons">
                <button 
                    className={`Repeat ${repeat ? 'text-green-500' : 'text-black'}`}
                    onClick={()=> setRepeat(!repeat)}>
                        <BsRepeat1 />
                </button>
                <FaAngleLeft onClick={() => onSkipHandler('skip-back') } />
                { isSongPlaying ? <FaPause onClick={playSongHandler} /> : <FaPlay onClick={playSongHandler} /> }
                <FaAngleRight onClick={() => onSkipHandler('skip-forward') } />
                </div>
                </div>
           
            
            
        // </div>
    );
}

export default Controls;