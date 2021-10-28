import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Enroll from './components/Enroll/Enroll';
import Admin from './components/Admin/Admin';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header> </Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <PrivateRoute path="/register/:id">
                            <Register> </Register>
                        </PrivateRoute>
                        <PrivateRoute path="/enroll">
                            <Enroll> </Enroll>
                        </PrivateRoute>
                        <PrivateRoute path="/admin">
                            <Admin></Admin>
                        </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
