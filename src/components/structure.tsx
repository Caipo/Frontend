import React from 'react';


type ContentPannelProps = {
    content: React.ReactNode;
    showMessageBox? : boolean;
    title: string;
}


function CenterPannel({content, showMessageBox = false, title }: ContentPannelProps) {
    
  return (
      <>
        <div className="container2">
        <h5>{title}</h5>
          {content}
        <div id="log">
        </div>
      {  showMessageBox && <textarea id="mssg" placeholder="Your message goes here"/>  }
  </div>
    
</> );
}


export default CenterPannel;
