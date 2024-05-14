import React from 'react';
import styles from './center_pannel.module.css'

type ContentPannelProps = {
    content: React.ReactNode;
    showMessageBox? : boolean;
    contentType? : string;
    title: string;
}

function CenterPannel({content, showMessageBox = false, title, contentType = 'chat' | 'login'}: ContentPannelProps) {
  const contentStyle = ( contentType === 'chat') ?styles.chatLog : styles.centeredContent;

  return (
  <>
      <div className={styles.centerContainer}>
              <h5>{title}</h5>
              <div className={contentStyle}>
              {content}
              </div>

      {showMessageBox && <textarea className={styles.mssg} placeholder="Your message goes here"/>  }
      </div>
  </> 
);
}

export default CenterPannel;
