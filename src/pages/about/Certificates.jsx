import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import aboutBanner from '../../assets/images/about-banner.jpg';  // 修改为 .jpg 格式

const Certificates = () => {
  const certificates = [
    "新疆维吾尔族自治区安全技术防范行业壹级资质",
    "新疆维吾尔族自治区计算机信息系统集成企业乙级资质",
    "建筑企业资质（电子与智能化工程专业承包贰级）",
    "安全生产许可证（建筑施工）",
    "ITSS运行维护资质",
    "信息技术服务运行维护资质三级",
    "国家管网安全准入证",
    "通过ISO9001国际质量体系认证",
    "通过ISO14001环境管理体系认证",
    "通过OHSAS18001职业健康安全管理体系认证",
    "新疆维吾尔族自治区安防技术防范行业协会会员单位",
    "新疆软件行业协会理事单位",
    "新疆计算机学会理事单位",
    "新疆电子学会理事单位"
  ];

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
          资质证书
        </Typography>
      </Box>

      {/* 其余内容保持不变 */}
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ mb: 4 }}
        >
          资质证书
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <Typography variant="body1">
                    {cert}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Certificates;