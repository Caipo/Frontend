import React from 'react'

interface Props {
  name: string;
  avatar: string;
}

function User({name, avatar} : Props){
    return (
    <div className='user-item'>
        <div className="avatar">
            <img className='avatar' src={avatar} alt="Avatar"/>
        </div>
        <div className="content">
            <div className="author"><b>{name}</b></div>
        </div>
    </div>
    );
}

export default User;
