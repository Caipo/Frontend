import React from 'react';
import SidePannel from '@/components/side_pannel';
import CenterPannel from '@/components/structure';
import Message from '@/components/messages'

function Home() {
    const centerCont = <>
                            <div id="log">
                            <Message text='asdf' avatar='' author='Caipo' /> 
                            </div>
                        </> 
    
    const sideCont = <> 
                        <div className="right-container">
                        <h3>Online Users</h3>
                        <ul id="user-list"></ul>
                        </div>
                    </>;

  return (
    <>
          <CenterPannel content={centerCont} title='Chat Log' showMessageBox={true}  />
          <SidePannel content={sideCont} title='Users' />
    </>
  );
}

export default Home;
