import { useState } from "react"
import Modal from "./componentes/modal"

const App = () => {

  const [isOpen,setIsOpen]=useState(true)


  return (
    <div className="container mx-auto">
      <button className="btn btn-primary"
      onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? "Cerrar Modal" : "Abrir Modal"}
      </button>
      { isOpen && <Modal/>}
    </div>
  )
}
export default App