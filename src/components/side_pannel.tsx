import React from 'react'

interface Props {
  content: React.ReactNode;
  title: string;
}

function SidePannel({content, title} : Props){
    return (
      <>
      <div className="right-container">
      <h3>{title}</h3>
          {content}
      <ul id="user-list"></ul>
      </div>
    </>
    );
}

export default SidePannel;
