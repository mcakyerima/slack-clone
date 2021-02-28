import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { auth, provider} from '../firebase';

function Login( props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            //console.log(result.user);
            const newUser = {
                name: result.user.displayName,
                userPhoto : result.user.photoURL
            };
            //saving our user in local storage to avoid going to login page when ever we refresh
            localStorage.setItem("user", JSON.stringify(newUser));
            props.setUser(newUser);
            //console.log(newUser);

        })
        .catch((error)=>{
            alert(error.message)
        });
    };
    
    return (
        <Container>
            <Content>
                <SlackLogo src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"/>
                <h1>Sign in to Slack</h1>
                    <SignIn onClick={() => signIn()}>
                    <Google src="http://pngimg.com/uploads/google/google_PNG19630.png"/>
                    <h4>Sign In with Google</h4>
                    </SignIn>
            </Content>
            
           
        </Container>
    );
};


export default Login;

const SignIn = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;    
    margin-top:30px;
    border-radius:20px;
    color:green;
    width:300px;
    height:60px;
    font-size:20px;
    border:solid px green;
    :hover{
        cursor:pointer;
        translate-y:line-height(10px);
    }
    h4 {
        font-weight:normal;
    }
`
const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #cbd4c5;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius:30px;
`
const SlackLogo = styled.img`
    height:100px;
    margin-bottom: 10px;
`
const Content = styled.div`
    background: white;
    padding:140px;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    box-shadow: -1px -1px 27px -2px rgba(0,0,0,0.51)

`

const Google = styled.img`
    height:30px;
    width:30px;
    margin-right:10px;
    `

