import React from 'react';
import SidePannel from '@/components/side_pannel/side_pannel';
import CenterPannel from '@/components/center_pannel/center_pannel';
import Message from '@/components/messages/messages'
import User from '@/components/users/users'


function Home() {
    const centerCont = <>
                           <div className="log">
                               <Message text='asdf' avatar='https://i.imgur.com/fRvjCez.png' author='Caipo' /> 
                            </div>
                       </> 
    
    const sideCont = <> 
                        <ul id="user-list">
                        {GetUsers()}
                        </ul>
                    </>;
  return (
    <>
          <CenterPannel content={centerCont} title='Chat Log' showMessageBox={true} contentType='chat' />
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
