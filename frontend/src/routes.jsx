import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import MenuPage from './pages/MenuPage/MenuPage';
import Standard from './pages/Standard/Standard';
import AccountDashboard from './components/AccountDashboard/AccountDashboard';

export const router = createBrowserRouter([
  { path: '/',      
      Component: Standard,
      children: [
        { index: true, Component: Home },
        {path: '/menu', Component: MenuPage },
        { path: '/menu/:category', Component: MenuPage },
        { path: '/about', Component: About },
        { path: '/account', Component: AccountDashboard },
      ]},
]);