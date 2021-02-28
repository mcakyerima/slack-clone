import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type='text' placeholder="Message"></input>
                    <SendButton>
                        <SendIcon/>
                    </SendButton>
                </form>
            </InputContainer>

        </Container>
    )
}

export default ChatInput;


const Container = styled.div`
    padding:20px;
    padding-right: 20px;
    padding-bottom: 24px;
    `
const InputContainer = styled.div`
    border:1.5px solid grey;
    border-radius: 20px;
    form {
        display: flex;
        height: 40px;
        align-items: center;
        padding-left:10px;
        input{
            flex:1;
            background:none;
            border: none;
            height:30px;
            font-size: 14px;
        }input:focus{
            outline:none
        }
    }
    `
const SendButton = styled.div`
    background: #34eb55;
    border-radius: 15px;
    width:30px;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .MuiSvgIcon-root{
        color: white;
        width:20px;

    }
    `