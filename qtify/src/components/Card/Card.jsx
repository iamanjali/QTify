import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import styles from './Card.module.css'; 

const Card = () => {
  return (
    <MuiCard className={styles.card} sx={{ maxWidth: 345 }}>
      {/* Card Image */}
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300x140" 
        alt="Album"
        sx={{ objectFit: 'cover' }} 
      />
      
      {/* Card Content */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Album Name
        </Typography>
        <Chip label="100 Follows" color="primary" />
      </CardContent>
    </MuiCard>
  );
};

export default Card;
