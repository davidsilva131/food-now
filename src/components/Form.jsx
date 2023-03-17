import { useState } from "react"
import "../styles/Form.css"
import Excel from "./Excel"
const Form = () => {
  const [almuerzo, setAlmuerzo] = useState(true)
  const [bebida, setBebida] = useState(true)
  const [data, setData] = useState([])

  const handleRegister = (e) => {
    e.preventDefault()

    const cedula = document.getElementById("cedula")
    if (cedula.value != "") {
      const datos = {
        cedula: cedula.value,
        almuerzo: almuerzo ? "SI" : "NO",
        bebida: bebida ? "SI" : "NO"
      }
      const dataClone = [...data]
      dataClone.push(datos)
      setData(dataClone)

    } else (
      alert("Porfavor ingrese todos los espacios del formulario")
    )

  }

  const handlereset = () => {
    const cedula = document.getElementById("cedula")
    cedula.value = "";
  }
  return (
    <>
      <form onSubmit={handleRegister} id="form">
        <div className="form__input">
          <h3>Cedula:</h3>
          <input type="number" id="cedula" />
        </div>
        <div className="form__input">
          <h3>Almuerzo: </h3>
          <input type="radio" name="almuerzo" value="si" defaultChecked onChange={() => { setAlmuerzo(true) }} />
          <label>SI</label>
          <input type="radio" name="almuerzo" value="no" onChange={() => { setAlmuerzo(false) }} />
          <label>NO</label>
        </div>
        <div className="form__input">
          <h3>Bebida: </h3>
          <input type="radio" name="bebida" value="si" defaultChecked onChange={() => { setBebida(true) }} />
          <label>SI</label>
          <input type="radio" name="bebida" value="no" onChange={() => { setBebida(false) }} />
          <label>NO</label>
        </div>
        <div className="form__buttons">
          <button className="btn" type="submit">Registrar</button>
          <button className="btn" type="reset" onClick={() => { handlereset() }}>Limpiar</button>
        </div>
      </form>
      <Excel datos={data} setData={setData} handlereset={handlereset} />
    </>
  )
}

export default Form