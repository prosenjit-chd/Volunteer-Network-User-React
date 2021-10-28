import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }
    const { user, logOut } = useAuth();

    return (
    
    <div>
        {/* Bootstrap Tag use here  */}
        <Navbar variant="light" expand="lg" className="" style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}>
            <Container>
                <NavLink style={{ color: "#165aee" }} className="navbar-brand fw-bold" to="/home"> <img style={{ height: 50, width: 200 }} src="https://i.ibb.co/GMGymmK/Group-1329.png" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/resg">Donation</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/enroll">Events</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/gh">Blog</NavLink>
                        {
                            user?.email ?
                                <div>
                                    <img style={{ height: 30, width: 30, borderRadius: "50%" }} src={user.photoURL} />
                                    <span> {user.displayName}</span>
                                    <Button onClick={logOut} variant="danger">LogOut</Button>
                                </div>
                                :
                                <NavLink className="register-btn" to="/login"> Register</NavLink>
                        }
                        <NavLink className="admin-btn" to="/admin"> Admin</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;