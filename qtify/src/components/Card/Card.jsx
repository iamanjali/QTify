import React, { useEffect, useState } from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import axios from 'axios';
import styles from './AlbumCardList.module.css'; 

const AlbumCardList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {albums.map(album => (
        <MuiCard key={album.id} className={styles.card} sx={{ maxWidth: 345 }}>
         
          <CardMedia
            component="img"
            height="140"
            image={album.imageUrl} 
            alt={album.name}
            sx={{ objectFit: 'cover' }} 
          />
          <CardContent>
            
            <div className={styles.followsContainer}>
              <Chip label={`${album.follows} Follows`} color="primary" />
            </div>
            
            <Typography gutterBottom variant="h5" component="div">
              {album.name}
            </Typography>
          </CardContent>
        </MuiCard>
      ))}
    </div>
  );
};

export default AlbumCardList;

