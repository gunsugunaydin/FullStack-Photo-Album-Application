// assets
import { LoginOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  LogoutOutlined
};
const isLoginEnabled = localStorage.getItem('token');

const caseLogin = [{
  id: 'logout1',
  title: 'Logout',
  type: 'item',
  url: '/logout',
  icon: icons.LogoutOutlined,
  target: true
}]

const caselogout = [{
        id: 'Login',
        title: 'Login',
        type: 'item',
        url: '/login',
        icon: icons.LoginOutlined,
        target: true,
  },
  {
        id: 'register1',
        title: 'Register',
        type: 'item',
        url: '/register',
        icon: icons.ProfileOutlined,
        target: true,
  }]


const auth = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    isLoginEnabled && caseLogin[0], // If there is a token, show Logout menu item
    !isLoginEnabled && caselogout[0], // If there is not token, show Login menu item
    !isLoginEnabled && caselogout[1]  // If there is not token, show Register menu item
  ].filter(Boolean) // This method filters empty values

};

export default auth;
