 import React, { useState } from 'react';
 import { Card as MuiCard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ id, imageUrl, name, follow, text }) => {
    return (
        <div className={styles.container}>
          
            <MuiCard key={id} className={styles.card} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
                sx={{ objectFit: 'cover' }}
              />
              
              <CardContent>
                <div className={styles.followsContainer}>
                  <Chip label={`${follow} ${text}`} color="primary" />
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
              </CardContent>
            </MuiCard>
         
        </div>
      );
    
  };
  
  export default Card;



