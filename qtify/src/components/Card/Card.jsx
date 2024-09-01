// import React, { useEffect, useState } from 'react';
// import { Card as MuiCard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
// import axios from 'axios';
// import styles from './Card.module.css';

// const Card = () => {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     axios.get('https://qtify-backend-labs.crio.do/albums/top')
//       .then(response => {
//         setAlbums(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className={styles.container}>
//       {albums.map(album => (
//         <MuiCard key={album.id} className={styles.card} sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image={album.image}
//             alt={album.title}
//             sx={{ objectFit: 'cover' }}
//           />
          
//           <CardContent>
//             <div className={styles.followsContainer}>
//               <Chip label={`${album.follows} Follows`} color="primary" />
//             </div>
//             <Typography gutterBottom variant="h5" component="div">
//               {album.title}
//             </Typography>
//           </CardContent>
//         </MuiCard>
//       ))}
//     </div>
//   );
// };

import React from 'react';
import { Chip } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ id, imageUrl, name, follows }) => {
    return (
      <div className={styles.card} key={id}>
        <img src={imageUrl} alt={name} className={styles.albumImage} />
        <div className={styles.info}>
          <Chip label={`${follows ?? 0} Follows`} className={styles.chip} />
          <h3 className={styles.albumName}>{name}</h3>
        </div>
      </div>
    );
  };
  
  export default Card;



