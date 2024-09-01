import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
  return (
    <BootstrapCarousel className={styles.carousel}>
      {items.map((item, index) => (
        <BootstrapCarousel.Item key={index}>
          {/* {item.component} */}
          <div className={styles.carouselItemContainer}>
            {item.component}
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
