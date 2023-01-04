import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sideBar'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="top"><span className="logo">Admin panel</span></div>
            </Link>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li><PersonIcon className='icon' /><span>Users</span></li>
                    </Link>

                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        <li><StoreMallDirectoryIcon className='icon' /><span>Products</span></li>
                    </Link>
                    <li><CreditCardIcon className='icon' /><span>Orders</span></li>
                    <li><LocalShippingIcon className='icon' /><span>Delivery</span></li>
                    <p className="title">USEFUL</p>
                    <li><QueryStatsIcon className='icon' /><span>Stats</span></li>
                    <li><NotificationsIcon className='icon' /><span>Notifications</span></li>
                    <p className="title">SERVICE</p>
                    <li><FavoriteIcon className='icon' /><span>System health</span></li>
                    <li><PsychologyIcon className='icon' /><span>Logs</span></li>
                    <li><SettingsIcon className='icon' /><span>Settings</span></li>
                    <p className="title">USER</p>
                    <li><AccountCircleIcon className='icon' /><span>Profile</span></li>
                    <li><LogoutIcon className='icon' /><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar