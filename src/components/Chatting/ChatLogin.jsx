import React from 'react';
import "./ChatLogin.css";
import {Button} from "@material-ui/core";
import {auth,provider} from "../../Firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function ChatLogin() {

    // const [{},dispatch] = useStateValue();

    // const signIn = ()=>{
    //     auth.signInWithPopup(provider)
    //     .then(result=>{
    //         dispatch({
    //             type: actionTypes.SET_USER,
    //             user: result.user,
    //         })
    //     })
    //     .catch((error)=>alert(error.message));
    // }
  return( <>
    <div className='login'>
    <style>{`
            .login{
                display:flex;
                justify-content : center;
                flex:1;
                align-items:center;
            }
            `}</style>
    <div className="login_container">
    <img 
        src='https://www.howtogeek.com/wp-content/uploads/2021/06/whatsapp-logo-hero.jpeg?height=200p&trim=2,2,2,2'
        alt=''
    />
    <div className="login_text">
        <h1>Sign in to whatsapp</h1>
    </div>
    
    <Button >
    Sign In with Google
    </Button>
    </div>
    </div>
  </>);
}

export default ChatLogin;
