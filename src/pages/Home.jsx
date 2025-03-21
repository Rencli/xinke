import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: 'calc(100vh - 64px)' }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/slide1.jpg" 
              alt="进取创新" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '100vh'
              }} 
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/slide2.jpg" 
              alt="专注敬业" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '100vh'
              }} 
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/slide3.jpg" 
              alt="合作共赢" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '100vh'
              }} 
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Home;