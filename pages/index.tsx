import React from 'react';

function App() {
  return (
<>
    <div className="container2">
    <h5>Chats Log</h5>
    <div id="log">
        <Message />
    </div>

    <textarea id="mssg" placeholder="Your message goes here">
    </textarea>
  </div>


  <div className="right-container">
  <h3>Online Users</h3>
  <ul id="user-list"></ul>
  </div>
</>);
}


function Message(){
    return(
        <>
           <div className='message'>
          <div className="avatar">
              <img className='avatar' src='' alt="Avatar" />
          </div>
          <div className="content">
                  <div className="author">Sennder</div>
                  <div className="text">meassage </div>
          </div>
          </div>
        </>
    );
}

function User(){
    return(
        <>
            <div className="avatar">
                <img className='avatar' src='' alt="Avatar" />
            </div>
            <div className="content">
                <div className="author"><b>matt</b></div>
            </div>
        </>
    );
}

export default App;
