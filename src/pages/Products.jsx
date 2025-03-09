import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '换热器系列',
      description: '高效能换热设备，适用于各类工业场景',
      image: '/products/heat-exchanger.jpg',
      features: ['高效传热', '节能环保', '使用寿命长']
    },
    {
      id: 2,
      name: '蒸发设备',
      description: '专业蒸发设备，满足多样化工艺需求',
      image: '/products/evaporator.jpg',
      features: ['蒸发效率高', '运行稳定', '自动化控制']
    },
    {
      id: 3,
      name: '定制化设备',
      description: '根据客户需求定制的专业设备解决方案',
      image: '/products/custom.jpg',
      features: ['个性化定制', '专业设计', '一站式服务']
    }
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        {/* 产品分类 */}
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            产品与服务
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box>
                      {product.features.map((feature, index) => (
                        <Typography key={index} variant="body2" component="li">
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                    <Box mt={2}>
                      <Button variant="contained" color="primary">
                        了解更多
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 定制服务 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            定制服务
          </Typography>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              专业定制，匠心打造
            </Typography>
            <Typography variant="body1" paragraph>
              我们提供专业的设备定制服务，根据客户的具体需求，量身定制最适合的解决方案。
              从方案设计、生产制造到安装调试，我们提供全流程的技术支持和服务保障。
            </Typography>
            <Grid container spacing={3} mt={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  需求分析
                </Typography>
                <Typography variant="body2">
                  深入了解客户需求，提供专业建议
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  方案设计
                </Typography>
                <Typography variant="body2">
                  个性化设计，优化工艺方案
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  售后保障
                </Typography>
                <Typography variant="body2">
                  专业团队提供及时的技术支持
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;