import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Table'

const single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rAzk51Q9eUHXB36EMIBhbxu-KViHD9Uaa9QrYSE&s" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sara@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 33333 33333</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">455a, ftftf,ftftft, chennai</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User spending (Lat 6 months)'/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default single