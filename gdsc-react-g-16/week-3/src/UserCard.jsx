import React from "react";
function UserCard({name, email,age}){
    return(
        <div>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Age:{age}</p>
        </div>
    )
}
export default UserCard;