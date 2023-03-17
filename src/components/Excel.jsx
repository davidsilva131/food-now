import * as XLSX from 'xlsx'

const Excel = ({ datos, setData, handlereset }) => {

  console.log(datos);
  const exportExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(datos)
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, workSheet, "Datos")
    XLSX.utils.sheet_add_aoa(datos, [["Cedula", "Almuerzo", "Bebida"]], { origin: "A1" })
    XLSX.writeFile(workbook, "Test.xlsx", { compression: true });
    handlereset()
    setData([])
  }

  return (
    <button className='btn' onClick={() => { exportExcel() }}>Generar Excel</button>
  )
}

export default Excel