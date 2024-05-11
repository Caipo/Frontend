import React from 'react'
import styles from './side_pannel.module.css'

interface Props {
  content: React.ReactNode;
  title: string;
}

function SidePannel({content, title} : Props){
    return (
      <>
      <div className={styles.rightContainer}>
      <h3>{title}</h3>
          {content}
      <ul id="user-list"></ul>
      </div>
    </>
    );
}

export default SidePannel;
