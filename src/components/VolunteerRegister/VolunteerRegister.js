import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ArchiveFill } from 'react-bootstrap-icons';
import './VolunteerRegister.css';

const VolunteerRegister = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://pc-volunteer.herokuapp.com/users/')
            .then(res => setEvents(res.data))
    }, [])

    const handleEventDelete = (id) => {
        axios.delete(`https://pc-volunteer.herokuapp.com/users/${id}`)
            .then(res => {
                alert("Successfully deleted");
                const remainingEvents = events.filter(e => e._id !== id);
                setEvents(remainingEvents);

            }).catch(err => console.log(err))
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registating date</th>
                        <th>Volunteer list</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((e, i) => <tr>
                            <td>{i}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.date}</td>
                            <td>{e.title}</td>
                            <td onClick={() => handleEventDelete(e._id)} > <ArchiveFill></ArchiveFill> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default VolunteerRegister;