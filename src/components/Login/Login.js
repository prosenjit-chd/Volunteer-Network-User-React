import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, processLogin, setIsLoading, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="container mt-5">
            <div className="border border-2 w-50 mx-auto py-5">
                <h4 className="mb-4 text-center"> Login With </h4>
                <Button onClick={handleGoogleSignIn} className="rounded-pill border border-1" variant="light" type="submit">
                    <Google /> <span className="ms-5 me-5">Continue with Google</span>
                </Button>
                <p>Don't have an account?
                    <Link className="text-center" to="/login"><span className="ms-2">Create an Account</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;