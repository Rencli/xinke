import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import aboutBanner from '../../assets/images/about-banner.webp';

const Products = () => {
  const products = [
    {
      title: '云与智能',
      description: '提供云计算与智能化解决方案，助力企业数字化转型。',
      imageUrl: '/images/products/cloud-intelligence.jpg'
    },
    {
      title: '公共安全',
      description: '提供全面的公共安全解决方案，保障城市安全。',
      imageUrl: '/images/products/public-safety.jpg'
    },
    {
      title: '智慧网络',
      description: '构建高效的智慧网络，提升网络性能与安全。',
      imageUrl: '/images/products/smart-network.jpg'
    },
    {
      title: '数智计算',
      description: '提供先进的数智计算平台，支持大数据分析与处理。',
      imageUrl: '/images/products/digital-computing.jpg'
    },
    {
      title: '网络安全',
      description: '提供全面的网络安全解决方案，保护企业信息安全。',
      imageUrl: '/images/products/network-security.jpg'
    },
    {
      title: '企业办公',
      description: '提供智能化企业办公解决方案，提高办公效率。',
      imageUrl: '/images/products/enterprise-office.jpg'
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
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.title}>
              <Card 
                id={product.title === '云与智能' ? 'cloud-intelligence' :
                    product.title === '公共安全' ? 'public-safety' :
                    product.title === '智慧网络' ? 'smart-network' :
                    product.title === '数智计算' ? 'digital-computing' :
                    product.title === '网络安全' ? 'network-security' :
                    product.title === '企业办公' ? 'enterprise-office' : ''}
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