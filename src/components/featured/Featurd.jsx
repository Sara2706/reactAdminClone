import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-circular-progressbar/dist/styles.css'

const Featurd = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total  Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featredChart">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Total sales made today orem ipsum</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Late Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featurd