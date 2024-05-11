import React from 'react'
import styles from './login_form.module.css'

interface Props {
}

function SidePannel({} : Props){
    return (
    const loginContent = <> 
                    <label className="radio-container">
                        <input type="radio" name="option" className='login-radio' value="option1"/>
                      <span className="radio-inner"></span>
                      <span className="radio-label">Option 1</span>
                    </label>

                    <label className="radio-container">
                      <input type="radio" className='login-radio' name="option" value="option2"/>
                      <span className="radio-inner"></span>
                      <span className="radio-label">Option 2</span>
                    </label>
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

        return ( loginConent);
}

export default SidePannel;

