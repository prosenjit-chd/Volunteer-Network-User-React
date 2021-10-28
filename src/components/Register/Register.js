import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const dateRef = useRef('');
    const purposeRef = useRef('');

    useEffect(() => {
        axios.get(`https://pc-volunteer.herokuapp.com/volcollection/${id}`)
            .then(res => setEvent(res.data))
    }, [])
    const handleUser = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const title = event.title;
        const description = event.description;
        const img = event.img;
        const data = { name, email, title, description, img }
        axios.post('https://pc-volunteer.herokuapp.com/users', data)
            .then(res => {
                alert("Event added");
                e.target.reset();
            })
    }

    return (
        <div className="mt-3">
            <Form onSubmit={handleUser} className="w-50 mx-auto border border-1 p-5">
                <h3 className="mb-4">Register as a Volunteer</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={user.displayName} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Full Name" />
                    <Form.Control value={user.email} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="email" placeholder="Username or Email" />
                    <Form.Control className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="date" placeholder="Date" />
                    <Form.Control className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Purpose" />
                    {/* <Form.Control className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Organize books at the library." /> */}
                </Form.Group>
                <Button variant="primary" type="submit" className="register-submit">
                    Registration
                </Button>
            </Form>
        </div>
    );
};

export default Register;