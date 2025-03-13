import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <img src="/images/slide1.jpg" alt="工业场景" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <img src="/images/slide2.jpg" alt="技术特写" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <img src="/images/slide3.jpg" alt="应用场景" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <img src="/images/slide4.jpg" alt="团队办公" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <img src="/images/slide5.jpg" alt="企业外观" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Home;