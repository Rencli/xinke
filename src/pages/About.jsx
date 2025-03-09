import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        {/* 公司历史 */}
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            公司历史
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              新科恒辰信息技术有限公司成立于多年前，一直致力于为客户提供高质量的技术解决方案。
              在发展历程中，我们不断创新进取，持续提升技术实力和服务能力。
            </Typography>
            <Typography variant="body1" paragraph>
              公司发展历程：
              - 公司成立
              - 获得行业资质认证
              - 技术团队扩充
              - 业务范围扩展
              - 建立完善的服务体系
            </Typography>
          </Paper>
        </Box>

        {/* 资质与荣誉 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            资质与荣誉
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  专业资质
                </Typography>
                <Typography variant="body1" paragraph>
                  - D1/D2压力容器设计制造资质
                  - ISO9001质量管理体系认证
                  - 高新技术企业认证
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  企业荣誉
                </Typography>
                <Typography variant="body1" paragraph>
                  - 行业技术创新奖
                  - 优秀供应商称号
                  - 质量信誉双优企业
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 团队介绍 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            团队介绍
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  我们拥有一支专业的技术团队，包括资深工程师、设计专家和技术研发人员。
                  团队成员均具备丰富的行业经验和专业知识，能够为客户提供最优质的服务。
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 企业文化 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            企业文化
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  企业愿景
                </Typography>
                <Typography variant="body1">
                  成为行业领先的技术解决方案提供商
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  企业使命
                </Typography>
                <Typography variant="body1">
                  为客户创造价值，推动行业技术进步
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  核心价值观
                </Typography>
                <Typography variant="body1">
                  诚信、创新、专业、共赢
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;