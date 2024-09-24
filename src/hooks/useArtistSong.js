import { useEffect, useState } from "react";


function ArtistSong(ArtistName){
    const [Data,setData]=useState({});
    useEffect(()=>{
        const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${ArtistName}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd8e1587a50mshc715026af8cc3a8p1e6efajsnc39e5fa372e5',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
        fetch(url,options)
        .then((res)=> res.json())
        .then((res)=> setData(res.data))
        .catch((error)=>{
            console.log("Artist Song Error: ",error);
        })

    },[ArtistName])
    return Data;
}
export default ArtistSong;