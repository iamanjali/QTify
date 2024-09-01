// import React from 'react';
// import { Swiper, SwiperSlide, Navigation } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/bundle';

// const Carousel = ({ items }) => {
//   return (
//     <div className="carousel-container">
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={10}
//         slidesPerView={3}
//         navigation
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {items.map(item => (
//           <SwiperSlide key={item.id}>
//             <div className="card-wrapper">
//               {item.component}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;


import React, { useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/navigation';
import 'swiper/css';
import 'swiper/css/bundle';

const Carousel = ({ items }) => {
  const swiperRef = useRef(null);


  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <div className="card-wrapper">
              {item.component}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="navigation-buttons">
        <button className="navigation-button left" onClick={() => swiperRef.current.slidePrev()}>
          {/* Left navigation button icon or text */}
        </button>
        <button className="navigation-button right" onClick={() => swiperRef.current.slideNext()}>
          {/* Right navigation button icon or text */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;