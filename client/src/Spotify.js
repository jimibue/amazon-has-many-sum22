import axios from "axios";
import React, { useState, useEffect } from "react";

//1. setup page in react router -testing
//2. set up state and axios -testing
//3. render to UI -testing

const Spotify = () => {
  let [artistSongsRaw, setArtistSongsRaw] = useState([]);
  let [artists, setArtists] = useState([]);
  let [songs, setSongs] = useState([]);
  let [artistSongs, setArtistSongs] = useState([]);

  useEffect(() => {
    getArtistSongs();
  }, []);

  // [{id: 1, artist_id: 1, song_id: 1, artist_name: 'Tool', song_name: '46 & you, t-b'}]
  // [{id:artist id, name: artist name}] (no duplicat)
  // [{id:1, name:'tool'},{id:2,name""mj"},{id:3, name:'Britney}]
  // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  const getUniqueArtists = (data) => {
    
    // get unique artist
    let unique = data.filter((value, index, array) => {
      return array.findIndex((y) => y.artist_id == value.artist_id) === index;
    });

    // get only artist data
    const artistData = unique.map((ad) => {
      return { id: ad.artist_id, name: ad.artist_name };
    });
    setArtists(artistData);
  };
  //    [{id songs, name song:name}]
  const getUniqueSongs = (data) => {
    const songsData = data.reduce((accum, as) => {
      // if added as info to my accumaltor i don't need to add it
      // if findIndex doesn't find it reutrn -1 (need to add)
      const index = accum.findIndex((s) => s.id === as.song_id);
      if (index === -1) {
        accum.push({ id: as.song_id, name: as.song_name });
      }
      return accum;
    }, []);

    setSongs(songsData);
  };
  //   [{id:song_id(),name: artists:['tool','mj']}]
  const normalizeSongData = (data) => {
    const songsData = data.reduce((accum, as) => {
      // if added as info to my accumaltor i don't need to add it
      // if findIndex doesn't find it reutrn -1 (need to add)
      const index = accum.findIndex((s) => s.id === as.song_id);
      if (index === -1) {
        accum.push({
          id: as.song_id,
          name: as.song_name,
          artists: [{ artist_id: as.artist_id, name: as.artist_name }],
        });
      } else {
        accum[index].artists.push({
          artist_id: as.artist_id,
          name: as.artist_name,
        });
      }
      return accum;
    }, []);

    setArtistSongs(songsData);
  };

  const getArtistSongs = async () => {
    try {
      let res = await axios.get("/api/artist_songs");
      // this is not a synchouros call
      setArtistSongsRaw(res.data);
      //artistSongsRaw is not set here,
      // but it will be before this component renders
      getUniqueArtists(res.data);
      getUniqueSongs(res.data);
      normalizeSongData(res.data);
      //   setArtists(uArtisits);
    } catch (err) {
      console.log(err);
      alert("err");
    }
  };
  const renderArtistSongs = () => {
    return artistSongs.map((as) => {
      return (
        <div key={as.id} className="component">
          <p>{as.name}</p>
          <p>{JSON.stringify(as.artists)}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Spotify</h1>
      <h1>songs with artists</h1>
      <p>{JSON.stringify(artistSongs)}</p>
      <h1>artists</h1>
      <p>{JSON.stringify(artists)}</p>
      <h1>songs</h1>
      <p>{JSON.stringify(songs)}</p>
      <div>{renderArtistSongs()}</div>
    </div>
  );
};

export default Spotify;
