import React from 'react'
import styled from 'styled-components';

function ChatMessages() {
    return (
        <Container>
            <UserAvatar>
                <img src= "https://yt3.ggpht.com/yti/ANoDKi7BLBx687asZ0lwV2j85hH8k035Y6LMZ5Wzv6q1ZQ=s88-c-k-c0x00ffffff-no-rj-mo"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Mc
                    <span>22/22/2020 11:30 AM</span>
                </Name>
                <Text>
                    this is the coolest challenge

                </Text>
            </MessageContent>

        </Container>
       
    )
}

export default ChatMessages
const Container = styled.div`
padding:8px 20px;
display:flex;
align-items: center;
:hover{
    cursor:pointer;
    background: #e8ebe6;
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
`