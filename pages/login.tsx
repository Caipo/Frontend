import React from 'react';
import SidePannel from '@/components/side_pannel';
import CenterPannel from '@/components/structure';

function Login() {
    const description = <a href="home">chat</a>;

  return (
          <CenterPannel content={description} title='Login'  />
  );
}



export default Login;
