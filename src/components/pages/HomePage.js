import React from 'react';
import {NavLink} from 'react-router-dom'


const HomePage = () => (
        <div>
            <h1>Home page</h1>
            <NavLink to="/login"> Login</NavLink>
        </div>
    );

export default HomePage;
