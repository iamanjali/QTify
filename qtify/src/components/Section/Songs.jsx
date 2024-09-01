import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import { Tabs, Tab } from '@mui/material';
import styles from './Songs.module.css';

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
        setGenres([
          { key: 'All', label: 'All' },
          ...response.data
        ]);
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
        follow={song.likes}
        text="Likes"
      />
    ),
  }));

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>
      {/* <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        aria-label="Genre Tabs"
        className={styles.tabs}
        centered
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs> */}
      <Tabs>
  {genres.map((genre) => (
    <Tab key={genre.key} label={genre.label} value={genre.key} />
  ))}
</Tabs>
      {/* <div className={styles.carousel}>
        <Carousel items={items} />
      </div> */}
    </div>
  );
};

export default Songs;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../Card/Card';
// import Carousel from '../Carousel/Carousel';
// import { Tabs, Tab } from '@mui/material';
// import styles from './Songs.module.css';

// const Songs = () => {
//   const [songs, setSongs] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState('All');

//   useEffect(() => {
//     const fetchSongsAndGenres = async () => {
//       try {
//         const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs');
//         const genresResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');

//         setSongs(songsResponse.data);
//         setGenres(['All', ...genresResponse.data]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSongsAndGenres();
//   }, []);

//   const handleTabChange = (event, newValue) => {
//     setSelectedGenre(newValue);
//   };

//   const filteredSongs = selectedGenre === 'All' ? songs : songs.filter(song => song.genre === selectedGenre);

//   const items = filteredSongs.map((song) => ({
//     id: song.id,
//     component: (
//       <Card
//         key={song.id}
//         imageUrl={song.image}
//         name={song.title}
//         follow={song.likes}
//         text="Likes"
//       />
//     ),
//   }));

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>Songs</h2>
//       </div>
//       <Tabs
//         value={selectedGenre}
//         onChange={handleTabChange}
//         className={styles.tabs}
//         variant="fullWidth"
//       >
//         {genres.map((genre) => (
//           <Tab key={genre} label={genre} value={genre} />
//         ))}
//       </Tabs>
//       <div className={styles.carousel}>
//         <Carousel items={items} />
//       </div>
//     </div>
//   );
// };

// export default Songs;