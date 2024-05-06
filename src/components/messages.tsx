import React from 'react'

interface Props {
  text: React.ReactNode;
  author: string;
  avatar: string;
}

function Message({text, author, avatar} : Props){
    return (
      <>
           <div className='message'>
          <div className="avatar">
              <img className='avatar' src={avatar} alt="Avatar" />
          </div>
          <div className="content">
                  <div className="author">{author}</div>
                  <div className="text">{text}</div>
          </div>
          </div>
        </>
    );
}

export default Message;
