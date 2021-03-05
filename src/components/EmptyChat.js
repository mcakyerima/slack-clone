import { React, useState } from 'react'
import styled from 'styled-components'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AddChannels from './AddChannels'

function EmptyChat() {
    const [ message , showMessage] = useState(" ");
    
    const pop = ()=> {
        showMessage(<AddChannels showMessage={showMessage}/>)
}    


    
    return (
        <Container>
            <Main>
                {message}
                <Gif src="https://i.pinimg.com/originals/7c/1d/ab/7c1dab157f34e603487b5d0b057da448.gif"></Gif>
                <h3>Looks like this is your first time here!</h3>
                <h4>Select Rooms or Click Botton Below to Add Room!</h4>
                <Add style={{fontSize:50}} onClick={() => pop()}/>
            </Main>

        </Container>
    )
}

export default EmptyChat;

const Container = styled.div`
    display:flex;
    min-height:100%;
    height:auto;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Gif = styled.img`
    margin-bottom: 10px;
    height:350px;
    width:350px;
    border-radius:50%;
    `
const Add = styled(ControlPointIcon)`
    color:grey;
    margin-top:10px;
    :hover{
        cursor:pointer;
        color:cyan;
    }
`
