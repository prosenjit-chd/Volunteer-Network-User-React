import React from 'react';
import { Col, Container, Form, Row, Button, ListGroup } from 'react-bootstrap';
import { People, Plus } from 'react-bootstrap-icons';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerRegister from '../VolunteerRegister/VolunteerRegister';
import './Admin.css';

const Admin = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container style={{ "marginTop": "80px" }}>
                <Row className="g-4">
                    <Col xs="1" md="2" lg="3" className="side-bar">
                        <ListGroup>
                            <ListGroup.Item as= {NavLink} to={`${url}/volunteerregister`} className="border-0"><People/> Volunteer register list</ListGroup.Item>
                            <ListGroup.Item as= {NavLink} to={`${url}/addevent`} className="border-0"> <Plus/> Add event</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* Data Maping here  */}
                    <Col xs="1" md="2" lg="9">
                        <Switch>
                            <Route path={`${path}/volunteerregister`}>
                                <VolunteerRegister></VolunteerRegister>
                            </Route>
                            <Route path={`${path}/addevent`}>
                                <AddEvent> </AddEvent>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;