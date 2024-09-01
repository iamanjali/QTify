// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../Card/Card';
// import styles from './Section.module.css';
// import { Grid } from '@mui/material';
// import Carousel from '../Carousel/Carousel';

// const Section = () => {
//   const [albums, setAlbums] = useState([]);
//   const [collapsed, setCollapsed] = useState(false);

//   useEffect(() => {
//     axios.get('https://qtify-backend-labs.crio.do/albums/top')
//       .then(response => {
//         setAlbums(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   const items = albums.map(album => ({
//     id: album.id,
//     component: (
//       <Card
//         key={album.id}
//         imageUrl={album.image}
//         name={album.title}
//         follow={album.follows}
//       />
//     ),
//   }));

//    const displayedAlbums = collapsed ? albums.slice(0, 7) : albums;

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>Top Albums</h2>
//         <button onClick={toggleCollapse}>
//           {collapsed ? 'Show A' : 'Collapse'}
//         </button>
//       </div>

//       <div className={styles.albumGrid}>
//       {/* <Grid container spacing={2}> */}
      
        
//             {displayedAlbums.map(album => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={album.id}>
//           <Card 
//             key={album.id}
//             imageUrl={album.image}
//             name={album.title}
//             follow={album.follows}
//           />
//           </Grid>
//         ))} 
            
        
//     {/* </Grid> */}


       
//       </div>

//       {!collapsed && albums.length > 7 && (
//         <div className={styles.carousel}>
        
//         </div>
//       )}
//     </div>
//   );


// return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>Top Albums</h2>
//         <button onClick={toggleCollapse}>
//           {collapsed ? 'Show All' : 'Collapse'}
//         </button>
//       </div>
//       {collapsed ? (
//         <Carousel items={items} />
//       ) : (
//         <div className={styles.albumGrid}>
//           {items.map(item => (
//             <div key={item.id} className={styles.gridItem}>
//               {item.component}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';
import { Grid } from '@mui/material';
import Carousel from '../Carousel/Carousel'; // Import the Carousel component

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const items = albums.map(album => ({
    id: album.id,
    component: (
      <Card
        key={album.id}
        imageUrl={album.image}
        name={album.title}
        follow={album.follows}
      />
    ),
  }));

  const displayedAlbums = collapsed ? items.slice(0, 7) : items;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>

      {!collapsed ? (
        <div className={styles.albumGrid}>
          <Grid container spacing={2}>
            {displayedAlbums.map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                {item.component}
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div className={styles.carousel}>
          <Carousel items={items} />
        </div>
      )}
    </div>
  );
};

export default Section;
