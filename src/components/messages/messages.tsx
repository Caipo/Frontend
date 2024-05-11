import React from 'react'
import styles from './messages.module.css'

interface Props {
  text: React.ReactNode;
  author: string;
  avatar: string;
}

function Message({text, author, avatar} : Props){
    return (
      <>
          <div className={styles.message}>
          <div className={styles.avatar}>
              <img className={styles.avatar} src={avatar} alt="Avatar" />
          </div>

          <div className={styles.content}>
                  <div className='author'>{author}</div>
                  <div className='text'>{text}</div>
              </div>
          </div> 
        </>
    );
}

export default Message;
