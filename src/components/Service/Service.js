import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    console.log(props.s)
    const { _id, title, date, description, img} = props.s;
        // use use History function 
    const history = useHistory();
        // use handaler 
    const handleRegistration = () => {
            history.push(`/register/${_id}`)
        }

    return (
        <div>
         <Col>
            <Card className="h-100 cart-font border-0 service-card">
                <Card.Img variant="top" src={img} className="card-img"/>
                <Card.Body onClick={handleRegistration} className="div-clor">
                        {/* <Card.Title className="card-title" style={{color: "#e6520e"}}>{title}</Card.Title> */}
                        {title}
                </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default Service;