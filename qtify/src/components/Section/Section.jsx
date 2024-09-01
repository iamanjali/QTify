import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';

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

  const displayedAlbums = collapsed ? albums.slice(0, 7) : albums;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>

      <div className={styles.albumGrid}>
        {albums.map(album => (
          <Card 
            key={album.id}
            imageUrl={album.image}
            name={album.title}
            follows={album.follows}
          />
        ))}
      </div>

      {!collapsed && albums.length > 7 && (
        <div className={styles.carousel}>
       
        </div>
      )}
    </div>
  );
};

export default Section;
