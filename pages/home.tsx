import React from 'react';
import SidePannel from '@/components/side_pannel';
import CenterPannel from '@/components/structure';

function Home() {
    const description = <a href="login">login</a>;

  return (
      <>
          <CenterPannel content={description} title='Root'  />
          <SidePannel content={<p>asdf</p>} title='Users' />
    </>
  );
}

export default Home;
