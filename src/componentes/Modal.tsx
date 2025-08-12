import { useEffect } from "react"

const Modal = () => {

  //Crea temporizador
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("useEffect ejecutándose cada segundo")
    },1000)

    //Detiene el temporizador al cerrar el modal
    return () =>{
      clearInterval(timer)
      console.log("Temporizador detenido")
    }
  },[])

  return (
    <div className="alert alert-warning">Este es un mensaje</div>
  )
}
export default Modal