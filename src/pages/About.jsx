import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ pt: 10, pb: 4, minHeight: 'calc(100vh - 64px)' }}>
      <Container maxWidth="lg">
        {/* 公司简介部分 */}
        <Box mb={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            公司简介
          </Typography>
          <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f8f9fa' }}>
            <Typography variant="body1" paragraph>
              新科恒辰信息技术工程有限公司成立于多年，一直致力于为客户提供高质量的技术解决方案。在发展历程中，我们不断创新进取，持续提升技术实力和服务能力。
            </Typography>
            <Typography variant="body1" paragraph>
              公司发展历程：公司成立 - 获得行业资质认证 - 技术团队扩充 - 业务范围扩展 - 建立完善的服务体系
            </Typography>
          </Paper>
        </Box>

        <Grid container spacing={4}>
          {/* 专业资质 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              专业资质
            </Typography>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: '#f8f9fa' }}>
              <Typography variant="body1" paragraph>
                - D1/D2压力容器设计制造资质
              </Typography>
              <Typography variant="body1" paragraph>
                - ISO9001质量管理体系认证
              </Typography>
              <Typography variant="body1" paragraph>
                - 高新技术企业认证
              </Typography>
            </Paper>
          </Grid>

          {/* 企业荣誉 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              企业荣誉
            </Typography>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: '#f8f9fa' }}>
              <Typography variant="body1" paragraph>
                - 行业技术创新奖
              </Typography>
              <Typography variant="body1" paragraph>
                - 优秀供应商称号
              </Typography>
              <Typography variant="body1" paragraph>
                - 质量信誉双优企业
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* 团队介绍 */}
        <Box mt={6}>
          <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f8f9fa' }}>
            <Typography variant="body1">
              我们拥有一支专业的技术团队，包括资深工程师、设计专家和技术研发人员。团队成员均具丰富的行业经验和专业知识，能够为客户提供最优质的服务。
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;