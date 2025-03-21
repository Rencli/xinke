import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: 'calc(100vh - 64px)', position: 'relative' }}>
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
          }}>
            <img 
              src="/images/slide1.jpg" 
              alt="进取创新" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }} 
            />
            {/* 添加半透明遮罩 */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1
            }} />
            {/* 添加标题文字 */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              width: '80%'
            }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
              >
                进取创新
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                新科恒辰 - 智能化系统解决方案专家
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        
        {/* 其他轮播项使用相同的结构，只需更改图片和文字 */}
        <SwiperSlide>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
          }}>
            <img 
              src="/images/slide2.jpg" 
              alt="专注敬业" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }} 
            />
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1
            }} />
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              width: '80%'
            }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
              >
                专注敬业
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                以专业态度打造卓越服务
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        
        <SwiperSlide>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
          }}>
            <img 
              src="/images/slide3.jpg" 
              alt="合作共赢" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }} 
            />
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1
            }} />
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              width: '80%'
            }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
              >
                合作共赢
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                携手客户创造更大价值
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Home;