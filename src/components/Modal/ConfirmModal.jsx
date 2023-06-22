import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../contexts/CartContext';

export const ConfirmModal = () => {
  const [show, setShow] = useState(false);
  const { clearCart } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Limpiar carrito
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de eliminar los productos del carrito de compras?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => clearCart()}>
            Eliminar productos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}