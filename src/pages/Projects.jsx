import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import aboutBanner from '../assets/images/about-banner.webp';  // 添加背景图导入

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '智能安防监控系统',
      description: '某政府机关智能安防监控系统部署现场',
      image: '/images/projects/project1.jpg'
    },
    {
      id: 2,
      title: '数据中心建设',
      description: '某企业数据中心机房建设现场',
      image: '/images/projects/project2.jpg'
    },
    {
      id: 3,
      title: '智能门禁系统',
      description: '某园区智能门禁系统安装现场',
      image: '/images/projects/project3.jpg'  // 修改为正确的路径
    },
    {
      id: 4,
      title: '网络系统集成',
      description: '某单位网络系统集成项目实施现场',
      image: '/images/projects/project4.jpg'  // 修改为正确的路径
    },
    {
      id: 5,
      title: '智能管网系统',
      description: '某机构智能管网系统部署现场',
      image: '/images/projects/project5.jpg'  // 修改为正确的路径
    },
    {
      id: 6,
      title: '安防控制中心',
      description: '某园区安防控制中心建设现场',
      image: '/images/projects/project6.jpg'  // 修改为正确的路径
    },
    {
      id: 7,
      title: '智能楼宇系统',
      description: '某大厦智能楼宇系统集成现场',
      image: '/images/projects/project7.jpg'  // 修改为正确的路径
    },
    {
      id: 8,
      title: '信息化系统建设',
      description: '某企业信息化系统建设现场',
      image: '/images/projects/project8.jpg'  // 修改为正确的路径
    },
    {
      id: 9,
      title: '综合布线工程',
      description: '某园区综合布线工程实施现场',
      image: '/images/projects/project9.JPG'
    },

  ];

  return (
    <Box>
      {/* 添加背景图片区域 */}
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
          工程实景
        </Typography>
      </Box>

      {/* 原有内容 */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 3
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
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

export default Projects;