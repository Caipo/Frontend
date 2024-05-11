import React from 'react';
import CenterPannel from '@/components/center_pannel/center_pannel';
import LoginForm from '@/components/login_form/login_form';


function Login() {
  return (
      <>
          <CenterPannel content={<LoginForm />} title=''  />
      </>
  );
}

export default Login;
