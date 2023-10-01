import { Container } from "react-bootstrap"
import imagen from "../assets/img/NotFound.png"

const NotFound = () => {
  return (
    <Container className="pt-5">
        <h2 className="mb-4">
           La ruta ingresada no existe
        </h2>
        <img src={imagen} alt="404"/>

    </Container>
  )
}

export default NotFound