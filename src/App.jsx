import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import * as XLSX from 'xlsx'
function App() {

  const [users, setUsers] = useState(null)

  const handleFile = async ({ target }) => {
    const file = target.files[0]
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setUsers(jsonData)

  }
  return (
    <div className='container'>
      <input type="file" onChange={(e) => { handleFile(e) }} />
      {
        users != null && (<Form users={users} />)
      }

    </div>
  )
}

export default App
