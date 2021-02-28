import React from 'react'
import TextEditor from './TextEditor'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { InfoOutlined } from '@material-ui/icons';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # Mc Fresh
                    </ChannelName>
                
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

                    {/* <h3> Mc fresh</h3>
                    <StarBorderIcon style={{marginLeft:10}}/>
                
                <sideContainer>
                    <PersonAddIcon style={{padding:20}}/>
                    <InfoIcon style={{padding:20}}/>
                </sideContainer> */}
            </Header>
            <MessageContainer>
                <ChatMessages/>
            </MessageContainer>
            <ChatInputHolder>
                <ChatInput/>
            </ChatInputHolder>
        </Container>
        
    );
};



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
`
const ChannelName = styled.div`
    font-weight : 700;
    `
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 16px;
    margin-right: 8px;
    padding-left:8px;
    margin-top: 8px;
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