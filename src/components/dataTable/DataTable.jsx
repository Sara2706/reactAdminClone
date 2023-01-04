import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'userName', headerName: 'User name', width: 230, renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img src={params.row.img} className='cellImg' alt='avatar' />
          {params.row.userName}
        </div>)
    }
  },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>)
    }
  },
];

const userRows = [
  { id: 1, userName: 'Snow', age: 35, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 2, userName: 'Lannister', age: 42, status: 'passive', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 3, userName: 'Lannister', age: 45, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 4, userName: 'Stark', age: 16, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 5, userName: 'Targaryen', age: null, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 6, userName: 'Melisandre', age: 150, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 7, userName: 'Clifford', age: 44, status: 'pending', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 8, userName: 'Frances', age: 36, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
  { id: 9, userName: 'Roxie', age: 65, status: 'active', email: 'is@email.com', img: 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg' },
];

const DataTable = () => {
  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: () => {
      return (
        <div className='cellAction'>
          <Link to='/users/test' style={{ textDecoration: 'none' }}>
            <div className="viewButton">View</div>
          </Link>
            <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className='datatable'>
      <div className='dataTableTitle'>
        Add new User
        <Link to='/users/new' className='link'>
          Add new
        </Link>
      </div>
      <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable