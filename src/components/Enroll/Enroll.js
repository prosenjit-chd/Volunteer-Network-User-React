import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Enroll.css';

const Enroll = () => {
    const { user } = useAuth();
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('https://pc-volunteer.herokuapp.com/users/')
            .then(res => filterMyEvent(res.data))
    }, [])

    const filterMyEvent = (data) => {
        setMyEvents(data.filter(event => event.email === user.email))
    }

    const handleEventDelete = (id) => {
        axios.delete(`https://pc-volunteer.herokuapp.com/users/${id}`)
            .then(res => {
                alert("Successfully deleted");
                const remainingEvents = myEvents.filter(e => e._id !== id);
                setMyEvents(remainingEvents);

            }).catch(err => console.log(err))
    }
    return (
        <div className="container">
            <Row xs={1} md={2} lg={2} className="g-4 mb-4">
                {
                    myEvents.map(e => <Col>
                        <Card className="border-0 d-flex flex-row bg-light p-4">
                            <Card.Img variant="left" className="enroll-img" src={e.img} />
                            <Card.Body className="text-center mt-5">
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>
                                    {e.date}
                                </Card.Text>
                                <Button onClick={() => handleEventDelete(e._id)} variant="secondary">Cancle</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Enroll;