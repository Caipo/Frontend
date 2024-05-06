import React from 'react';
import SidePannel from '@/components/side_pannel';
import CenterPannel from '@/components/structure';
import Message from '@/components/messages'
import User from '@/components/users'

function Home() {
    const centerCont = <>
                            <div id="log">
                            <Message text='asdf' avatar='https://i.imgur.com/fRvjCez.png' author='Caipo' /> 
                            </div>
                        </> 
    
    const sideCont = <> 
                        <div className="right-container">
                        <h3>Online Users</h3>
                        <ul id="user-list">
                        {GetUsers()}
                        </ul>
                        </div>
                    </>;

  return (
    <>
          <CenterPannel content={centerCont} title='Chat Log' showMessageBox={true}  />
          <SidePannel content={sideCont} title='Users' />
    </>
  );
}

function GetUsers(){
    const tempData = [
    {'name' : 'CyberNinja42', 'avatar' : 'https://i.imgur.com/nfB8nHU.jpeg'}, 
    {'name' : 'PixelPirate23', 'avatar' : 'https://i.imgur.com/fRvjCez.png'}, 
    {'name' : 'CodeMasterX', 'avatar' : 'https://i.imgur.com/sWVxwkV.jpeg'}, 
    {'name' : 'GeekGoddess', 'avatar' : 'https://i.imgur.com/IPVUvBD.jpeg'}, 
]; 

    
    return tempData.map((o, i) => <User name={o['name']} avatar={o['avatar']} />);
    
}

export default Home;
