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
        const inputRoom = prompt('Enter Room Name');
        if(inputRoom){
            db.collection('room').add({
                name: inputRoom
            });
        }

    }
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
                    <AddIcon onClick={addName}/>
                    </Plus>
                </NewChannelContainer>
                <ChannelsList>
                    {
                    props.rooms.map(item => (
                            <Channel onClick={() => goToChanenel(item.id)}>
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

//  
// ${props.style.backgroundColor}
const Container = styled.div`
background: blue;
`
const Plus = styled.div`
    cursor:pointer;
    :hover{
        color:red;
    }
    `

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
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
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
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
        background: #350D36;
    }
`
