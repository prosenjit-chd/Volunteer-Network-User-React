import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './AddEvent.css';

const AddEvent = () => {
    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="email" placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="email" placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Banner</Form.Label>
                        <Form.Control type="text" placeholder="Enter Banner URL" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddEvent;