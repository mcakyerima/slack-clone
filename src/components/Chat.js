import React, {useEffect, useState} from 'react'
import TextEditor from './TextEditor'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { InfoOutlined } from '@material-ui/icons';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages'
import db from '../firebase';
import { useParams } from 'react-router-dom';


function Chat() {
    let { channelId } = useParams();
    const [channel , setChannel] = useState();
    //create a message state
    const [messages , setMessages] = useState([]);

    //creating a messages collection functoin that will add message to database and fetch to out chat component
    const getMessages = () => {
        db.collection('room')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>{ 
            let message = snapshot.docs.map((doc) => doc.data())
                setMessages(message);
                
        })
    }




    const getChannels = () => {
        db.collection('room')
        .doc(channelId)
        .onSnapshot((snapshot) =>{
            setChannel(snapshot.data())
        })

    }
    useEffect(() =>{
        getMessages();
        getChannels();
        
    }, [channelId]);
   

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel && channel.name}
                    </ChannelName>
                        <StarBorderIcon/>
                
                <ChannelInfo>
                    this channel is awesome!

                </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details 
                    </div>
                     <Info/>
                </ChannelDetails>

            </Header>
            <MessageContainer>
                <ChatMessages/>
                {
                  messages > 0 && 
                  messages.map((data) => {
                      <ChatMessages
                       user = {data.text}/>
                  })
                }
                
            </MessageContainer>
            <ChatInputHolder>
                <ChatInput/>
            </ChatInputHolder>
        </Container>
    )       
}



export default Chat;
const Channel = styled.div`
    `
    const ChannelDetails = styled.div`
        display:flex;
        align-items: center;
        color:#c4cece;

    `
const Info = styled(InfoOutlined)`
    margin-left: 10px;
    `
const MessageContainer = styled.div`
    z-index:10;
`
const ChannelName = styled.div`
    font-weight : 700;
    display:flex;
    align-items:center;
    `
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 16px;
    margin-right: 8px;
    padding-left:8px;
    margin-top: 9px;
    `

const Header = styled.div`
    padding-left:20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content:space-between;

`
const ChatInputHolder = styled.div`
`

const Container = styled.div`
    display: grid;
    grid-template-rows: 65px auto min-content;
   `