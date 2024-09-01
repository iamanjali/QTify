import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';
import { Grid } from '@mui/material';
import Carousel from '../Carousel/Carousel';

const Section = ({ title, url }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, [url]);

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

//    const displayedAlbums = collapsed ? albums.slice(0, 7) : albums;

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>Top Albums</h2>
//         <button onClick={toggleCollapse}>
//           {collapsed ? 'Show All' : 'Collapse'}
//         </button>
//       </div>

//       {!collapsed ? (
//         <div className={styles.albumGrid}>
//           <Grid container spacing={2}>
//             {albums.map(album => (
//               <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={album.id}>
//                 <Card 
//                   key={album.id}
//                   imageUrl={album.image}
//                   name={album.title}
//                   follow={album.follows}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       ) : (
//         <div className={styles.carousel}>
//           <Carousel items={items} />  {/* Render the Carousel when collapsed is true */}
//         </div>
//       )}

//        <div className={styles.albumGrid}>

      
        
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
            
        



       
//       </div> 
      
    //    {!collapsed && albums.length > 7 && (
    //     <div className={styles.carousel}>
        
    //     </div>
    //   )} 

//     </div>
//   );


return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>
      {collapsed ? (
        <Carousel items={items} />
      ) : (
        <div className={styles.albumGrid}>
          {items.map(item => (
            <div key={item.id} className={styles.gridItem}>
              {item.component}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const Page = () => {
    return (
      <div>
        <Section title="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top" />

        <Section title="New Albums" url="https://qtify-backend-labs.crio.do/albums/new" />
      </div>
    );
  };

export default Page;

