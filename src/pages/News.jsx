import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Tabs, Tab } from '@mui/material';

const News = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const news = {
    companyNews: [
      {
        id: 1,
        title: '新科恒辰成功中标大型工业项目',
        date: '2024-03-15',
        summary: '我公司成功中标某大型工业企业的设备更新改造项目，将为客户提供全套的换热系统解决方案。'
      },
      {
        id: 2,
        title: '公司获得高新技术企业认证',
        date: '2024-02-28',
        summary: '经过严格评审，我公司成功获得高新技术企业认证，标志着公司的技术创新能力得到认可。'
      }
    ],
    industryNews: [
      {
        id: 1,
        title: '国家发布新能源产业发展规划',
        date: '2024-03-10',
        summary: '国家发改委发布新能源产业发展规划，为行业发展指明方向。'
      },
      {
        id: 2,
        title: '节能环保技术创新论坛召开',
        date: '2024-02-20',
        summary: '2024年节能环保技术创新论坛在京召开，探讨行业最新技术发展趋势。'
      }
    ],
    faq: [
      {
        id: 1,
        question: '如何选择合适的换热器？',
        answer: '选择换热器需要考虑多个因素，包括工作介质、温度、压力、流量等参数，建议联系我们的技术人员进行专业评估。'
      },
      {
        id: 2,
        question: '产品的质保期是多久？',
        answer: '我们的标准产品质保期为12个月，同时提供终身技术支持服务。'
      }
    ]
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            新闻中心
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="news tabs">
              <Tab label="公司新闻" />
              <Tab label="行业动态" />
              <Tab label="常见问题" />
            </Tabs>
          </Box>

          {/* 公司新闻 */}
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {news.companyNews.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {item.date}
                      </Typography>
                      <Typography variant="body2">
                        {item.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* 行业动态 */}
          {tabValue === 1 && (
            <Grid container spacing={3}>
              {news.industryNews.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {item.date}
                      </Typography>
                      <Typography variant="body2">
                        {item.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* 常见问题 */}
          {tabValue === 2 && (
            <Grid container spacing={3}>
              {news.faq.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.question}
                      </Typography>
                      <Typography variant="body2">
                        {item.answer}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default News;