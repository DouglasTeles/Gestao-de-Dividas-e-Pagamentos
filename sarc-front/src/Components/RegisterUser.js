
import React, { useState } from "react";
import logoIcon from "../Assets/logoIcon.png";
import Inputs from "./Inputs";
import {Link} from 'react-router-dom'


function RegisterUser() {
  const [show, setShow] = useState(1)
  const [username, setUsername] = useState('')
  const [cellphone, setCellphone ] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')

  return (
    <main>
      <div className="form-login-register">
        <form>
        <img src = {logoIcon} alt="Logo Sarc" />
          <h1>Register</h1>
          <fieldset>
          <Inputs 
            title="Name" 
            type="text"
            state = {username}
            setState = {e =>setUsername(e.target.value) }
          />
          
          <Inputs 
            title="Phone Number" 
            type="text" 
            state = {cellphone}
            setState = {e =>setCellphone(e.target.value) }
            />
            <p>Este será seu Usuário para Login</p>   
            
          <Inputs 
            title="Password" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) }
          />

          <Inputs 
            title="Confirm Password" 
            type="password" 
            state = {password1}
            setState = {e =>setPassword1(e.target.value) }
          />

          </fieldset>
          <button className="saveBtn">Save</button>
          <Link to = '/' className="linkCancel"> 
            <button className="btnCancel" >Cancel</button>

          </Link>          
        </form>
      </div>
    </main>
  );
}

export default RegisterUser;
