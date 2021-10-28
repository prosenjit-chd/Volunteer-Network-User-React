import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    // Use USe State here 
    const [service, setService] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://pc-volunteer.herokuapp.com/volcollection')
            .then(res => res.json())
            .then(data => setService(data.volunteers))
    }, []);

    return (
        <div>
            <Container style={{ "marginTop": "80px" }}>
                <Row xs={1} md={2} lg={4} className="g-4 mb-4">
                    {
                        service.map(s => <Service key={s.id} s={s} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;