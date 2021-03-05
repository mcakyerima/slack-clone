import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'
import {channelOption} from '../data/channelOption'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ThemeProvider} from "styled-components";
import Splash from './splashScreen'
import {useState} from "react";
import db from '../firebase'
import {useHistory} from 'react-router-dom'


function Sidebar(props) {
   

    const history = useHistory();
    const goToChanenel = (id) =>{
        if(id){
            console.log(id)
            history.push(`/room/${id}`)

        }

    }
    const addName = () => {
        <h1>this is awesome</h1>
        return (
            <h1>i am the input</h1>
            // <Form>
            //     <h2>Welcome</h2>
            //     <form>
            //         <h1>Enter Channnel Name</h1>
            //         <input>Add</input>
            //         <input>Cancel</input>
            //     </form>
            // </Form>
        );
        // const inputRoom = prompt('Enter Room Name');
        // if(inputRoom){
        //     db.collection('room').add({
        //         name: inputRoom
        //     });
        // }

    };
    const [theme, setTheme] = useState('light');
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Mc Fresh Continet
                    <ExpandMoreIcon/>
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }

            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <Plus>
                    <AddIcon onClick={()=> addName()}/>
                    </Plus>
                </NewChannelContainer>
                <ChannelsList>
                    {
                    props.rooms.map(item => (
                            <Channel  onClick={ () =>{
                                 goToChanenel(item.id)}}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
            
        </Container>
    )
}

export default Sidebar

const Form = styled.span`
    font-size: 300px;
    z-index:100;
    position: absolute;
    `

//  
// ${props.style.backgroundColor}
const Container = styled.div`
background: rgb(61,226,236); 
background: ${props => props.theme.sideBackground};
`
const Plus = styled.div`
    cursor:pointer;
    :hover{
        color:red;
    }
    `

const WorkspaceContainer = styled.div`
    color:white;
    height: 69px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid  #532753;
`

const Name = styled.div`
    display:flex;
   `


const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: linear-gradient(to top, #000046, #1cb5e0);
        font-size: 18px;
    }
`

const ChannelsContainer = styled.div`
    color: white;
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div``

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: linear-gradient(to top, #000046, #1cb5e0);
        height:30px;
        font-size: 18px;
    }
`
