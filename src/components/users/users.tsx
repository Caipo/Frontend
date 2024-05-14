import React from 'react'
import styles from './users.module.css'

interface Props {
  name: string;
  avatar: string;
}

function User({name, avatar} : Props){
    return (
    <div className={styles.userItem}>
        <div className={styles.avatar}>
            <img className={styles.avatar} src={avatar} alt="Avatar"/>
        </div>
        <div className={styles.content}>
            <div className={styles.author}><b>{name}</b></div>
        </div>
    </div>
    );
}

export default User;
