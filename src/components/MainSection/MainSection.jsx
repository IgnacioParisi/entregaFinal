import { Button, Container } from "react-bootstrap";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import './mainSection.css'

export const MainSection = () => {
    return (
        <>
            <div className="main-section-wrapper">
                <Container className="main-section-container">
                    <h1 className="main-title">
                        El mejor vino <br />
                        para cada ocasión.
                    </h1>
                    <p>Descubrí la mejor selección de vinos cuidadosamente elegidos.
                        En nuestra tienda online te ofrecemos una amplia variedad de vinos de las mejores regiones del mundo.
                    </p>
                    <span>¿Qué esperas para adentrarte en el apasionante mundo del vino?</span>
                    <br />
                    <button className="main-cta-btn">Explorar</button>
                </Container>
            </div>
            <ItemListContainer />
        </>
    )
}