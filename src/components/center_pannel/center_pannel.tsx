import React from 'react';
import styles from './center_pannel.module.css'

type ContentPannelProps = {
    content: React.ReactNode;
    showMessageBox? : boolean;
    title: string;
}

function CenterPannel({content, showMessageBox = false, title }: ContentPannelProps) {

  return (
  <>
  <div className={styles.centerContainer}>
      <h5>{title}</h5>
      {content}
      {showMessageBox && <textarea className={styles.mssg} placeholder="Your message goes here"/>  }
  </div>
    
</> );
}

function EnterScript() {
    return(1);

}





export default CenterPannel;
