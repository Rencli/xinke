import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import aboutBanner from '../../assets/images/about-banner.webp';

const Solutions = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // 延迟执行以确保 DOM 已完全加载
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100; // 导航栏高度加一些额外空间
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]); // 只在 hash 变化时触发

  const cases = {
    government: {
      title: '政府机关',
      cases: [
        { name: '乌鲁木齐市政府办公大楼及大院周边', content: '整体监控' },
        { name: '乌鲁木齐市达板城区靓化工程', content: '整体区域平安城市安防监控项目' },
        { name: '乌鲁木齐市机关事务管理局', content: '监控安防项目' },
        { name: '乌鲁木齐县法院', content: '办公场所安防监控' },
        { name: '新疆司法厅', content: '机房改造及新增设备监控安防项目' }
      ]
    },
    finance: {
      title: '金融机构',
      cases: [
        { name: '上海浦东发展银行乌鲁木齐分行', content: '各营业部安防监控及网络建设' },
        { name: '乌鲁木齐市商业银行', content: '各营业部安防监控' },
        { name: '乌鲁木齐市商业银行', content: '远程视频会议系统' },
        { name: '天安保险股份有限公司新疆分公司', content: '办公楼安防监控' }
      ]
    },
    education: {
      title: '教育机构',
      cases: [
        { name: '新疆医科大学', content: '鲤鱼山片区安防监控项目' },
        { name: '霍尔果斯职业技术学院', content: '整体监控安防，安检项目' },
        { name: '新疆司法警官学校', content: '监控及网络建设' },
        { name: '北屯中学', content: '教学楼、校园及场地安防监控项目' },
        { name: '新疆伊犁职业技术学校', content: '采购及监控安防项目' }
      ]
    },
    transport: {
      title: '交通运输',
      cases: [
        { name: '乌鲁木齐市公交BRT', content: '95个站点监控安防及防盗报警' },
        { name: '乌鲁木齐市公交集团', content: '7个停车场远程监控、电子巡更及厂区周界报警' },
        { name: '中国石油西部运输管理局', content: '西北区25个加压站监控安防' },
        { name: '乌鲁木齐市交通局', content: '高铁站，南站监控安防项目' },
        { name: '北屯火车站', content: '整体监控项目' }
      ]
    },
    industry: {
      title: '工业企业',
      cases: [
        { name: '和田青松建化水泥厂', content: '厂区周界报警及安防监控项目' },
        { name: '紫金矿业集团', content: '厂区车间安防报警项目' },
        { name: '新疆博达焦化有限公司', content: '厂区安防监控' },
        { name: '克拉玛依市旭光环保公司', content: '整体厂区及办公区域监控安防项目' },
        { name: '克拉玛依前锋环保公司', content: '监控安装项目' }
      ]
    },
    more: {
      title: '更多案例',
      cases: [
        { name: '喀什各地区8000个平安城市摄像头', content: '整体安装及售后项目' },
        { name: '乌鲁木齐市米东区62个小区', content: '整体庭园化安保，智能门禁，道闸' },
        { name: '奎屯市172个营业场所', content: '安检安防项目' },
        { name: '奎屯市各行政事业单位、学校75个单位', content: '安检安防项目' },
        { name: '喀什地区52个村远程视频会议', content: '视频会议集成项目' },
        { name: '乌苏市52个单位及场所', content: '安检安防项目' },
        { name: '阿克苏地区25个行政办事处', content: '监控防安项目' },
        { name: '中国石油西部运输管理局', content: '西北区25个加压站监控安防' },
        { name: '乌鲁木齐市公交集团', content: '27条线路终点站调度室安防监控' },
        { name: '西北区中国石油管道公司新疆，甘肃，青海', content: '整体光纤辅设及监控安防项目' },
        { name: '新疆医科大学', content: '鲤鱼山片区安防监控项目' },
        { name: '新疆医科大学', content: '校医院安防监控项目' },
        { name: '新疆医科大学', content: '校基础楼安防监控项目' },
        { name: '新疆医科大学', content: '子女学校安防监控及电子巡更' },
        { name: '新疆医科大学', content: '公寓楼安防监控' },
        { name: '乌鲁木齐市公交BRT新设7号线', content: '安防监控及网络建设系统' },
        { name: '乌鲁木齐市公交BRT新设6号线', content: '安防监控及网络建设系统' },
        { name: '新疆司法警官学校', content: '监控及网络建设' },
        { name: '喀什地区莎车县博物馆', content: '整体监控安防项目及网络建设' },
        { name: '乌鲁木齐市公交集团6个物业小区', content: '监控安防及网络建设项目' },
        { name: '新疆自治区胸科医院', content: '监控安防项目' },
        { name: '乌鲁木齐市公交集团7个停车场', content: '远程监控、电子巡更及厂区周界报警' },
        { name: '乌鲁木齐市全市BRT车站', content: '站内电子巡更系统' },
        { name: '乌鲁木齐市公交信息中心', content: '办公楼整体系统集成及监控' },
        { name: '乌鲁木齐市公交集团燃料公司', content: '燃气改装厂气瓶检测防爆安防监控系统' },
        { name: '乌鲁木齐市公交集团', content: '点钞中心监控及报警工程' },
        { name: '乌鲁木齐市公交集团燃料公司', content: '天然气加气站防爆安防监控报警项目（8个加气点）' },
        { name: '乌鲁木齐市珍宝巴士集团', content: '办公楼安防监控' },
        { name: '乌鲁木齐市珍宝巴士集团', content: '点钞中心监控机报警工程' },
        { name: '乌鲁木齐市珍宝巴士集团', content: '3个停车场监控安防电子巡更系统' },
        { name: '和田青松建化水泥厂', content: '厂区周界报警及安防监控项目' },
        { name: '喀什青松建化水泥厂', content: '厂区周界报警及安防监控项目' },
        { name: '自治区总工会物业小区', content: '各个住宅区监控安防' },
        { name: '乌鲁木齐汇业小区', content: '住宅区监控' },
        { name: '新疆女子监狱', content: '办公楼安防监控' },
        { name: '新疆天恒基大型停车场及物流园', content: '安防报警' },
        { name: '新疆农十二师美食一条街', content: '安防监控及电子巡更项目' },
        { name: '兵团182团中学', content: '教学楼、宿舍、校园安防监控项目' },
        { name: '兵团188团中学', content: '教学楼、宿舍、校园安防监控项目' },
        { name: '农六师五家渠市第一小学', content: '校区安防监控' },
        { name: '农六师垦区公安局', content: '远程安防监控报警系统' },
        { name: '乌鲁木齐市天山区保安公司', content: '区域内管辖公共服务行业安防监控' },
        { name: '新疆军分区伊犁团', content: '全团区监控安防报警' },
        { name: '新疆三建幼儿园', content: '园区整体监控' },
        { name: '新疆军区三十团', content: '整体综合网络及安防' },
        { name: '乌鲁木齐星月快捷酒店', content: '整体安防监控' },
        { name: '新疆木林森总店', content: '整体安防监控' },
        { name: '吐鲁番地区图书馆', content: '安防监控系统' },
        { name: '苏中建设集团', content: '各施工现场监控安防系统' },
        { name: '新疆武警指挥部七支队', content: '整体监控安防系统' },
        { name: '乌鲁木齐客运统管办', content: '监控网络集成系统' },
        { name: '中基实业', content: '整体监控安防系统' },
        { name: '喀什华雄木艺厂', content: '厂区，车间整体监控安防' },
        { name: '新疆西域养路工程公司', content: '整体办公楼及厂区监控安防' },
        { name: '新疆宝兰化工有限公司', content: '整体办公楼及厂区监控' },
        { name: '新疆恒升生物公司', content: '整体办公楼及厂区库房监控' },
        { name: '乌鲁木齐华泰宾馆', content: '整体监控安防系统' },
        { name: '新疆公交天然气改装厂（防爆）', content: '6个车间及全厂区整体监控' },
        { name: '中石油管道局', content: '新疆区整体电子巡更项目' },
        { name: '新疆名家玉器城', content: '整体监控，防盗报警项目' },
        { name: '奎屯市公安局', content: '安检安防设备项目' },
        { name: '奎屯市交警支队安检设备', content: '安检安防设备项目' },
        { name: '新疆兵团西山军事管理部', content: '整体监控安防项目' },
        { name: '西虹宾馆人武部学校', content: '设备采购及安装项目' },
        { name: '经开区园林局', content: '2个公园整体监控安防项目' },
        { name: '乌市统建房信息化采购及安装', content: '信息化采购及监控安装项目' },
        { name: '世界冠郡隔离点', content: '监控安装整体项目' },
        { name: '交通运输局公交车驾驶员应知应会考核系统安装', content: '监控安防项目' },
        { name: '乌鲁木齐某防恐培训中心', content: '整体监控安防项目' },
        { name: '达坂城区老旧小区', content: '监控安装项目' },
        { name: '新疆某部队', content: '整体监控安防项目' },
        { name: '交通局智能化应用枢纽检测', content: '整体监控安防项目' },
        { name: '乌鲁木齐市十九中', content: 'LED全彩大屏项目' },
        { name: '新疆南航物业后勤保障中心', content: '人员测温系统' },
        { name: '乌鲁木齐市公交集团各停车场', content: '人员及车辆道闸整体项目' }
      ]
    }
  };

  // 为了优化显示效果，我们可以修改卡片样式
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
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            color: 'white',
            position: 'relative',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          经典案例
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {Object.entries(cases).map(([key, category]) => (
          <Box 
            key={key} 
            sx={{ 
              mb: 8,
              scrollMarginTop: '100px', // 增加滚动边距
              position: 'relative'  // 添加相对定位
            }} 
            id={key}
          >
            <Box
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                py: 1.5,
                px: 3,
                mb: 3,
                borderRadius: '4px',
                width: '200px',  // 统一宽度
                textAlign: 'center',
                boxShadow: 2
              }}
            >
              <Typography 
                variant="h5" 
                component="h2"
                sx={{ 
                  fontWeight: 'bold'
                }}
              >
                {category.title}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {category.cases.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <CardContent sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{
                          color: '#1976d2',
                          fontWeight: 'bold',
                          fontSize: '1rem'  // 稍微减小字号以适应长标题
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          borderTop: '1px solid #eee',
                          pt: 2,
                          mt: 2
                        }}
                      >
                        {item.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Solutions;