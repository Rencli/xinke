import React from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 处理表单提交逻辑
  };

  return (
    <Box>
      <Container maxWidth="lg">
        {/* 联系方式 */}
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            联系我们
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  联系方式
                </Typography>
                <Typography variant="body1" paragraph>
                  地址：北京市朝阳区科技园区888号
                </Typography>
                <Typography variant="body1" paragraph>
                  电话：010-88888888
                </Typography>
                <Typography variant="body1" paragraph>
                  邮箱：info@xinke.com
                </Typography>
                <Typography variant="body1" paragraph>
                  工作时间：周一至周五 9:00-18:00
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  在线咨询
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="您的姓名"
                    name="name"
                    autoComplete="name"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="电子邮箱"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="联系电话"
                    name="phone"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="咨询内容"
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    提交
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 地图定位 */}
        <Box my={4}>
          <Typography variant="h6" gutterBottom>
            公司位置
          </Typography>
          <Paper elevation={3} sx={{ p: 3, height: '400px' }}>
            {/* 这里可以集成地图组件，如百度地图或高德地图 */}
            <Typography variant="body1" color="text.secondary">
              地图加载中...
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;