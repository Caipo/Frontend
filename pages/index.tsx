import React from 'react';
import SidePannel from '@/components/side_pannel';
import CenterPannel from '@/components/structure';

function App() {
    const description = <a href="login">login</a>;


  return (
      <>
          <CenterPannel content={description} title='Root'  />
     </>
  );
}



export default App;

