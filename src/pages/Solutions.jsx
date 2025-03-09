import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: '电力行业解决方案',
      description: '为电力行业提供专业的换热设备和系统解决方案，提高能源利用效率。',
      image: '/solutions/power.jpg',
      applications: [
        '电厂余热回收系统',
        '变压器冷却系统',
        '发电机组冷却系统'
      ]
    },
    {
      id: 2,
      title: '暖通空调解决方案',
      description: '为暖通空调行业提供高效节能的热交换设备，实现精确温控。',
      image: '/solutions/hvac.jpg',
      applications: [
        '中央空调系统',
        '地源热泵系统',
        '工业空调系统'
      ]
    },
    {
      id: 3,
      title: '化工制药解决方案',
      description: '为化工和制药行业提供安全可靠的工艺设备，确保生产质量。',
      image: '/solutions/chemical.jpg',
      applications: [
        '化工工艺冷却系统',
        '制药工艺加热系统',
        '多效蒸发系统'
      ]
    },
    {
      id: 4,
      title: '其他行业解决方案',
      description: '为食品、环保等行业提供定制化的设备和系统解决方案。',
      image: '/solutions/other.jpg',
      applications: [
        '食品加工设备',
        '环保处理设备',
        '工业冷却系统'
      ]
    }
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            行业解决方案
          </Typography>
          <Typography variant="body1" paragraph>
            新科恒辰依托多年的技术积累和行业经验，为不同行业客户提供专业的设备和系统解决方案。
          </Typography>

          <Grid container spacing={4}>
            {solutions.map((solution) => (
              <Grid item xs={12} md={6} key={solution.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={solution.image}
                    alt={solution.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {solution.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {solution.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      应用场景：
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {solution.applications.map((app, index) => (
                        <Typography key={index} component="li" variant="body2">
                          {app}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Solutions;