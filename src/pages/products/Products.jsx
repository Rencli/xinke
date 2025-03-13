import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import aboutBanner from '../../assets/images/about-banner.webp';

const Products = () => {
  const products = [
    {
      title: '监控系统',
      description: '提供专业的视频监控解决方案，包括高清摄像机、智能分析、远程监控等功能，适用于平安城市、智慧社区等场景',
      imageUrl: '/images/products/surveillance-system.jpg'
    },
    {
      title: '计算机系列产品',
      description: '提供各类计算机设备及配套产品，满足不同场景的办公需求',
      imageUrl: '/images/products/computer-series.jpg'
    },
    {
      title: '车辆门禁系统',
      description: '智能化车辆管理系统，支持车牌识别、访客管理、实时监控等功能',
      imageUrl: '/images/products/vehicle-access.jpg'
    },
    {
      title: '电视墙系统',
      description: '专业的大屏显示控制系统，支持多画面显示、画面分割、信号切换等功能',
      imageUrl: '/images/products/tv-wall-system.jpg'
    },
    {
      title: '液晶拼接显示系统',
      description: '高清液晶拼接屏解决方案，适用于指挥中心、监控室等场景',
      imageUrl: '/images/products/lcd-splicing.jpg'
    },
    {
      title: 'LED显示屏',
      description: '高亮度、高清晰度的LED显示解决方案，适用于户内外各类显示场景',
      imageUrl: '/images/products/led-display.jpg'
    },
    {
      title: '条码标签打印机',
      description: '专业的条码打印设备，支持多种规格标签打印，适用于物流、仓储等领域',
      imageUrl: '/images/products/barcode-printer.jpg'
    },
    {
      title: '条码识读器',
      description: '高效准确的条码扫描设备，支持多种条码格式，适用于各类商业场景',
      imageUrl: '/images/products/barcode-scanner.jpg'
    }
  ];

  // 添加滚动处理函数
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 在组件加载时处理 URL hash
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, []);

  return (
    <Box>
      <Box
        sx={{
          height: '400px',
          width: '100%',
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          mb: 4
        }}
      >
        {/* 添加半透明遮罩 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        />
        {/* 添加文字 */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            zIndex: 2,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3.5rem' },
            fontWeight: 'bold'
          }}
        >
          产品与服务
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ mb: 4 }}
        >
          产品与服务
        </Typography>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                id={product.title === '条码标签打印机' ? 'printer' :
                    product.title === '条码识读器' ? 'scanner' :
                    product.title === '监控系统' ? 'surveillance' :
                    product.title === '计算机系列产品' ? 'computer' :
                    product.title === '车辆门禁系统' ? 'vehicle' :
                    product.title === '电视墙系统' ? 'tv-wall' :
                    product.title === '液晶拼接显示系统' ? 'lcd' :
                    product.title === 'LED显示屏' ? 'led' : ''}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 3
                  },
                  scrollMarginTop: '100px' // 添加滚动偏移量，避免被导航栏遮挡
                }}
              >
                <CardMedia
                  component="img"
                  image={product.imageUrl}
                  alt={product.title}
                  sx={{ 
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                    p: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.02)'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      py: 1,
                      px: 2,
                      borderRadius: 1,
                      mb: 1
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      {product.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;