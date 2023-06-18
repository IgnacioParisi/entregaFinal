import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';

export const ModalConfirm = () => {

    const { removeItem } = useContext(CartContext)
 
    const handleSend = (event) => {
        event.preventDefault();

        
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>¿Estás seguro que queres eliminar el item del carrito?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary" onClick={() => removeItem()}>Eliminar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}