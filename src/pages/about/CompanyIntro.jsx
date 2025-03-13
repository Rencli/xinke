import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import aboutBanner from '../../assets/images/about-banner.webp';  // 添加图片导入

const CompanyIntro = () => {
  return (
    <Box>
      {/* 背景图片区域，添加文字覆盖 */}
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
          关于我们
        </Typography>
      </Box>

      {/* 其余内容保持不变 */}
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 4
          }}
        >
          关于我们
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="body1" paragraph sx={{ textIndent: '2em', textAlign: 'left' }}>
            新疆新科恒辰信息技术工程有限公司（简称新科恒辰）创立于2007年，总部位于乌鲁木齐市，注册资金1000万元，是深耕智能化系统建设与信息技术服务领域的高新技术企业。作为新疆首批获得智能化工程专业资质的企业，我们持有电子与智能化工程专业承包壹级、安防工程企业设计施工维护能力壹级等多项专业认证，并通过ISO9001质量管理体系国际认证。
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ textIndent: '2em', textAlign: 'left' }}>
            公司专注为政企客户提供智能化系统整体解决方案，核心业务涵盖智能安防监控系统、信息化系统集成、网络工程设计与实施、智能办公设备集成四大板块。经过十六年发展，服务网络已覆盖新疆全域及甘肃、青海等西部省区，累计为300余家客户提供专业服务，重点服务领域包括政府机关、金融机构、能源企业、医疗教育机构及商业综合体。
          </Typography>

          <Typography variant="body1" paragraph sx={{ textIndent: '2em', textAlign: 'left' }}>
            秉承"技术筑基，服务致远"的理念，我们构建了"咨询设计-系统集成-设备供应-运维保障"的全周期服务体系。依托自主技术团队和战略合作伙伴资源，持续为中国人民银行新疆分行、中石油西部管道公司为重点客户提供符合行业特性的定制化解决方案，项目验收合格率始终保持在100%，客户满意度达98%以上。
          </Typography>

          <Typography variant="body1" paragraph sx={{ textIndent: '2em', textAlign: 'left' }}>
            在智慧城市建设与产业数字化转型的浪潮中，新科恒辰将持续聚焦智能化创新，深化AIoT、大数据等前沿技术应用，致力于成为西北地区最具价值的智能化服务提供商，与合作伙伴共建安全、智能、高效的数字生态体系。
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default CompanyIntro;