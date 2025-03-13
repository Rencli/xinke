import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Products from './pages/products/Products'
import CompanyIntro from './pages/about/CompanyIntro'
import Certificates from './pages/about/Certificates'
import Solutions from './pages/solutions/Solutions'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'  // 确保这个路径正确

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'projects',  // 确保这个路径与导航链接匹配
        element: <Projects />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'solutions',
        element: <Solutions />
      },
      {
        path: 'about/intro',
        element: <CompanyIntro />
      },
      {
        path: 'about/certificates',
        element: <Certificates />
      },
      {
        path: 'projects',  // 添加工程实景路由
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

export default router