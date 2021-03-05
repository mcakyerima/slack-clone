import React from 'react'
import styled from 'styled-components';

function ChatMessages({user, image, text, timestamp}){
    return (
        <Container>
            <UserAvatar>
                <img src={image} />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {user}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>

        </Container>
       
    )
}

export default ChatMessages;
const Container = styled.div`
z-index:10;
padding:8px 20px;
display:flex;
align-items: center;
:hover{
    cursor:pointer;
    background: #e8ebe6;
    color:black;
}
`
const UserAvatar = styled.div`
    width: 60px;
    height:60px;
    margin-right:8px;
    img {
        height: 50px;
        width:50px;
        border-radius:50%;
        over-flow:hidden;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;

`
const Name = styled.span`
    font-weight:900;
    font-size: 15px;
    span {
        font-weight: 400;
        color: grey;
        margin-left:10px;
        font-size:13px;
    }
`
const Text = styled.span`
:hover{
    color:black;
}
`