import React, { useState } from 'react';
import './user.css';

    const User = (props) => {
        const {name,phone,picture} = props.user;
        const addMember = props.addMember;
       
        const [mobile,setMobile] = useState('');

        const showPhone = () =>{setMobile(phone)}
    return (
        <div className="user">
            <h3>Single person</h3>
            <p>{name}this</p>
            <p>Phone:{mobile}</p>
            <button onClick={showPhone}>show phone number</button>
            <button onClick={()=>addMember(name)}>Add User</button>
        </div>
    );
};

export default User;