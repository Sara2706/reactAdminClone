import './widgets.scss';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widgets = ({ type }) => {
    let data;

    const amount=100;
    const dif=20;

    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all user",
                icon: (
                    <PersonIcon className='icon' style={{color:'rgb(199, 20, 20)',backgroundColor:'rgba(248, 100, 100, 0.267)'}}/>
                )
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all order",
                icon: (
                    <ShoppingCartIcon className='icon' style={{color:'rgb(224, 224, 20)',backgroundColor:'rgba(255, 255, 4, 0.486)'}}/>
                )
            }
            break;
        case 'earnings':
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View yet earnings",
                icon: (
                    <PaidIcon className='icon' style={{color:'rgb(16, 219, 16)',backgroundColor:'rgba(98, 240, 98, 0.295)'}}/>
                )
            }
            break;
        case 'balance':
            data = {
                title: "Balance",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletIcon className='icon' style={{color:'rgb(243, 26, 243)',backgroundColor:'rgba(245, 90, 245, 0.288)'}}/>
                )
            }
            break;

        default:
            break;
    }


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    {<ExpandLessIcon />}
                    {dif}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets