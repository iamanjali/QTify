import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // Correct import path for Swiper v9+
import { Navigation } from 'swiper/modules'; // Import Navigation module if you use it

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]} // Ensure Navigation is correctly imported and used
        spaceBetween={10}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            {item.component} {/* Render the content or component inside the slide */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;



// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import { Pagination } from 'swiper/modules/pagination';

// const Carousel = ({ items }) => {
//   const swiperRef = useRef(null);

//   const handleSlidePrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleSlideNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <Swiper
//         modules={[Pagination]} // Include Pagination in the modules array
//         spaceBetween={10}
//         slidesPerView={3}
//         pagination={{ clickable: true }} // Configure pagination options
//         onSwiper={(swiper) => { swiperRef.current = swiper; }}
//       >
//         {items.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="card-wrapper">
//               {item.component}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="custom-navigation">
//         <button className="navigation-button left" onClick={handleSlidePrev}>
//           {/* Left navigation button icon or text */}
//         </button>
//         <button className="navigation-button right" onClick={handleSlideNext}>
//           {/* Right navigation button icon or text */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;