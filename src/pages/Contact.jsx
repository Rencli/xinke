import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import aboutBanner from '../assets/images/about-banner.jpg';  // 修改为 .jpg 格式

const Contact = () => {
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
          联系我们
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">公司地址</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 5 }}>
                    新疆乌鲁木齐市红十月小区东二区13号楼2-901
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">联系电话</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 5 }}>
                    0991-4517768
                    <br />
                    13809912421
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">电子邮箱</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 5 }}>
                  465767648@qq.com
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;