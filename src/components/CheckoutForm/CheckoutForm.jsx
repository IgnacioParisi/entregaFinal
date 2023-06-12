import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData);
    }

    return (
        <Container>
            <Form onSubmit={handleConfirm}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type='text' 
                        name='name'
                        value={name} 
                        onChange={({ target }) => setName(target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        name='email'
                        placeholder='nombre@ejemplo.com' 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control 
                        type='text' 
                        name='phone'
                        placeholder='123456789' 
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </Form.Group>
                <Button type='submit'>Crear orden</Button>
            </Form>
        </Container>
    )
}