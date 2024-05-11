import React from 'react'
import styles from './login_form.module.css'

interface Props {}

function LoginForm({} : Props){
    const loginContent = <> 
                <div className={styles.customCheckBoxHolder}>

                    <input className={styles.customCheckBoxInput} name="option" id="cCB1" type="radio"/>
                    <label className={styles.customCheckBoxWrapper} for="cCB1">
                        <div className={styles.customCheckBox}>
                            <div className="inner">Login</div>
                        </div>
                    </label>

                    <input className={styles.customCheckBoxInput} name="option" id="cCB2" type="radio"/>
                    <label className={styles.customCheckBoxWrapper} for="cCB2">
                        <div className={styles.customCheckBox}>
                            <div className="inner">Sign Up</div>
                        </div>
                    </label>

                </div>

                    <form>
                        <input id='lname' classNameName={styles.inputBox} placeholder="User name"/> <br/> 
                        <input id='lpassword' classNameName={styles.inputBox} placeholder="Password"/> <br/> 
                    </form> 

                    <button onClick={LoginSubmit}> submit </button> 
                </>;

        return (loginContent);
}


async function SignUpSubmit(){
    const usernameInput = document.getElementById("fname") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    if (!usernameInput || !passwordInput){return(-1);}

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

    if (!usernameInput || !passwordInput){return(-1);}

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
export default LoginForm;
