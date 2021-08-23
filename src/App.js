import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import EmployeesPage from './component/employee/EmployeesPage';

const style = {
    color: 'red',
    margin: '10px'
}

function App() {

    return (
        <div className="container">
            <Router>
                <div className="col-md-12">
                    <h1 className="text-center" style={style}></h1>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/employee" component={EmployeesPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


export default App;
