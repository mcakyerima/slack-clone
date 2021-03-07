import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { auth, provider} from '../firebase';
import asset from './asset/login.gif'
import Bounce from 'react-reveal'

function Login( props) {
    console.log(props);

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
            <Bounce left>
            <Section>
                
                <h1 style={{fontSize:50}}>Welcome to Slack Clone</h1>
                <h3>  > by Mc Fresh</h3>
                <Gif src={asset}/>
               
            </Section>
            </Bounce>
            
         <ContainerSide>
         <Bounce right>
            <Content>
                <SlackLogo src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"/>
                    <Slack>
                        <h1>Sign in to Slack</h1>
                    </Slack>
                    <SignIn onClick={() => signIn()}>
                    <Google src="http://pngimg.com/uploads/google/google_PNG19630.png"/>
                    <h4>Sign In with Google</h4>
                    </SignIn>
            </Content>
            </Bounce>
        </ContainerSide>
        
            
           
        </Container>
    );
};


export default Login;
const Gif = styled.img`
    margin-left:20px;
    `

const ContainerSide = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items: center;`


const Section = styled.div`
    flex:1;
    padding-top:40px;
    padding-left:40px;
    height:100vh + 50px;
    margin:0;
    h1 , h3 {
        color:white;
    }
    `

const SignIn = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;    
    margin-top:30px;
    border-radius:20px;
    color:green;
    width:250px;
    height:80px;
    font-size:15px;
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
    position:fixed;
    left:0;
    right:0;
    height:auto;
    background:linear-gradient(to bottom, #800080, #ffc0cb);
    background-size:cover;
    display:flex;
    flex-direction: row;
    h1{
        font-size:25px;
    }
`
const SlackLogo = styled.img`
    height:100px;
    margin-bottom: 10px;
    :hover{
        height:110px;

    }
`
const Slack = styled.div`
        width:200px;
        color:white;`

const Content = styled.div`
    background: linear-gradient(to bottom, #fc00ff, #00dbde);;
    position:relative;
    padding:100px;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    height: 220px;
    width:180px;
    justify-content:center;
    align-items:center;
    box-shadow: -1px -1px 27px -2px rgba(0,0,0,0.51);
    :hover{
        transform: translateY(-10px);   
        transition: linear .2s}

`

const Google = styled.img`
    height:19px;
    width:19px;
    margin-right:0px;
    padding-right:25px;
    `

