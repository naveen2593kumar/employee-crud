import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2 className="text-center">Home</h2>
                <nav><NavLink to="/employee">Employees Page</NavLink></nav>
            </>
        );
    }

}

export default Home;