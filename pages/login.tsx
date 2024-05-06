import React from 'react';
import CenterPannel from '@/components/structure';
import { redirect } from 'next/navigation'



function Login() {
    const loginContent = <> 
                    <form>
                        <input id='fname' className='input-box' placeholder="User name"/> <br/> 
                        <input id='password' className='input-box' placeholder="Password"/> <br/> 
                    </form> 
                    <button onClick={LoginSubmit}> submit </button> 
                    <h3>Sign up </h3>
                    <form>
                        <input id='fname' className='input-box' placeholder="User name"/> <br/> 
                        <input id='password' className='input-box' placeholder="Password"/> <br/> 
                    </form> 
                    <button onClick={SignUpSubmit}> submit </button> 
                </>;

  return (
      <>
      <CenterPannel content={loginContent} title='Login'  />
      </>
  );
}

async function SignUpSubmit(){
    const usernameInput = document.getElementById("fname") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const api_inputs = {
            username: usernameInput.value,
            password: passwordInput.value
        };

    const url = 'https://apichallenges.herokuapp.com/mirror/request';
    const data = await fetch(
        url, {
            method: "POST", 
            body: JSON.stringify(api_inputs)
        }
    );

    if (data['status'] === 200){
        console.log('You logged in');
        window.location.href = "/home";
    }
    console.log(data);
}
async function LoginSubmit(){
    const usernameInput = document.getElementById("fname") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const api_inputs = {
            username: usernameInput.value,
            password: passwordInput.value
        };

    const url = 'https://apichallenges.herokuapp.com/mirror/request';
    const data = await fetch(
        url, {
            method: "POST", 
            body: JSON.stringify(api_inputs)
        }
    );

    if (data['status'] === 200){
        console.log('You logged in');
        window.location.href = "/home";
    }
    console.log(data);
}

export default Login;
