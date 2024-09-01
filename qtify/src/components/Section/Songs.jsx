import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import { Tabs, Tab } from '@mui/material';
import styles from './SongsSection.module.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching songs data:', error);
      });

    axios.get('https://qtify-backend-labs.crio.do/genres')
      .then(response => {
        setGenres(['All', ...response.data]);
      })
      .catch(error => {
        console.error('Error fetching genres data:', error);
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'All' 
    ? songs 
    : songs.filter(song => song.genre === selectedGenre);

  const items = filteredSongs.map(song => ({
    id: song.id,
    component: (
      <Card
        key={song.id}
        imageUrl={song.image}
        name={song.title}
        likes={song.likes}
      />
    ),
  }));

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        aria-label="Genre Tabs"
        className={styles.tabs}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>
      <div className={styles.carousel}>
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default Songs;
