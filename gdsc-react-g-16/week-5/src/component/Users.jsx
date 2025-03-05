import React from 'react';
import { Outlet } from 'react-router-dom';

function Users() {
    return (
        <div>
            <h1>use 1</h1>
            <h1>use 2</h1>
            <h1>use 3</h1>
            <Outlet />
        </div>
    );
}

export default Users;