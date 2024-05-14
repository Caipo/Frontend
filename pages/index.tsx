import React from 'react';
import CenterPannel from '@/components/center_pannel/center_pannel';

function App() {
    const description = <a href="login">login</a>;


  return (
      <>
          <CenterPannel content={description} title='Root'  />
     </>
  );
}



export default App;

