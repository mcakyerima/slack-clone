import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

function ChatInput({sendMessage , props}) {
    const [input , setInput ] = useState('');

    const send = (e) => {
        e.preventDefault()
        if(!input) return;
        sendMessage(input)
        setInput('')

    }
    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                    onChange = {(e) => setInput(e.target.value)}
                    type='text'
                    value = {input}
                    placeholder="Message"></input>
                    <SendButton 
                    type = "submit"
                    onClick = {send}>
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
    border:1.5px solid;
    border-color: ${props => props.theme.chatInput};
    border-radius: 20px;
    form {
        display: flex;
        height: 40px;
        align-items: center;
        padding-left:10px;
        input{
            color:${props => props.theme.fontColor};
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
const SendButton = styled.button`
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