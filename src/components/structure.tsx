import React from 'react';


interface MyComponentProps {
  centerContent: React.ReactNode;
  rightContent: React.ReactNode;
  messageBox : React.ReactNode;
  centerTitle: string;
  rightTitle: string;
  showSide: boolean;
}

interface SideProps{
  rightContent: React.ReactNode;
  rightTitle: string;
}


function Structure({centerContent, rightContent, messageBox, centerTitle, rightTitle, showSide}: MyComponentProps) {


  return (
      <>
        <div className="container2">
        <h5>{centerTitle}</h5>
          {centerContent}
        <div id="log">
        </div>

    {messageBox}
  </div>
    
</> );
}


function SidePannel({rightContent, rightTitle} : SideProps){
    return (
      <>
      <div className="right-container">
      <h3>{rightTitle}</h3>
          {rightContent}
      <ul id="user-list"></ul>
      </div>
    </>
    );
}
export default Structure;
