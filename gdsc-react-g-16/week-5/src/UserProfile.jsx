import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const {id} = useParams();
    return (
        <div>
           <h1>User id: {id}</h1> 
        </div>
    );
}

export default UserProfile;