import React, { useEffect, useState } from 'react'
import styles from './login_form.module.css'

interface Props {}

function LoginForm({} : Props){
    const [select, setSelect] = useState(true);


    const signContent  = <>
                            <form>
                                <input id='name' className={styles.inputBox} placeholder="sign name"/> <br/> 
                                <input id='password1' type='password' className={styles.inputBox} placeholder="Password"/> <br/> 
                                <input id='password2' type='password' className={styles.inputBox} placeholder="Password"/> <br/> 
                            </form> 
                         </>;
    
    const loginContent = <> 
                            <form>
                                <input id='name' className={styles.inputBox} placeholder="User name"/> <br/> 
                                <input id='password' type='password' className={styles.inputBox} placeholder="Password"/> <br/> 
                            </form> 
                         </>;

    const handelClick = () => {setSelect(event.target.value)}
    

    const mainContent = <> 
                               <div className={styles.customCheckBoxHolder} onChange={ handelClick }>
                                <input className={styles.customCheckBoxInput} name="option" value='login' id="cCB1" type="radio" defaultChecked />
                                <label className={styles.customCheckBoxWrapper} htmlFor="cCB1">
                                    <div className={styles.customCheckBox}>
                                        <div className="inner">Login</div>
                                    </div>
                                </label>

                                <input className={styles.customCheckBoxInput} name="option" value='sign' id="cCB2" type="radio"/>
                                <label className={styles.customCheckBoxWrapper} htmlFor="cCB2">
                                    <div className={styles.customCheckBox}>
                                        <div className="inner">Sign Up</div>
                                    </div>
                                </label>

                            </div>
                                
                            {(select === 'sign') ? signContent : loginContent } 
                            <button onClick={Submit}> submit </button> 
                         </>;

        return (mainContent);
}


async function Submit(){
    const loginSelected = document.getElementById("cCB1").checked;
    const url = 'https://apichallenges.herokuapp.com/mirror/request';
    
    const usernameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");

    if (!usernameInput?.value || !passwordInput?.value){alert("The Username and password cannot be empty"); return(-1)}

    const api_inputs = {
            username: !usernameInput.value,
            password: !passwordInput.value}

    const data = await fetch(
        url, {
            method: "POST", 
            body: JSON.stringify(api_inputs)
        }
    );
    
    switch(+data['status']){
        case 200: {window.location.href = "/home";}
        case 403: {alert('Login wrong')}
    }

}

export default LoginForm;
