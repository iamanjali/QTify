import React, { useEffect, useState } from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import axios from 'axios';
import styles from './Card.module.css'; // Optional: for custom styling

const Card = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {albums.map(album => (
        <MuiCard key={album.id} className={styles.card} sx={{ maxWidth: 345 }}>
          {/* Card Image */}
          <CardMedia
            component="img"
            height="140"
            image={album.imageUrl} // Replace with actual field name
            alt={album.name}
            sx={{ objectFit: 'cover' }} // Ensure image fits within the card
          />
          
          {/* Card Content */}
          <CardContent>
            {/* Display Follows Count */}
            <div className={styles.followsContainer}>
              <Chip label={`${album.follows} Follows`} color="primary" />
            </div>
            {/* Display Album Name */}
            <Typography gutterBottom variant="h5" component="div">
              {album.name}
            </Typography>
          </CardContent>
        </MuiCard>
      ))}
    </div>
  );
};

export default Card;


