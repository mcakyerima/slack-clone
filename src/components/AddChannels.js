import { React, useState} from 'react'
import styled from 'styled-components';


function AddChannels({showMessage}) {
    const [name , addName ] = useState();
    
    const update = (e) => {
        const reslt = name
        console.log(reslt);
        addName(null);
        showMessage(null)
    }

   
    return (
        <Content>
            <Card>
                    <Form>
                        <input type='text'
                        onChange={(e) => addName(e.target.value)}
                        placeholder="Enter Room Name"></input>
                        <Btn>
                        <Cancel type= "submit"
                                onClick= {() => showMessage(null)}>Cancel</Cancel>
                                <Submit type= "submit"
                                onClick= {() => update()}>Add</Submit>
                                 
                        </Btn>
                    </Form>
                </Card>
        </Content>
    )
}

export default AddChannels;

const Btn = styled.div`
    display:flex;
    margin-top:10px;
    `
const Submit = styled.div`
    height:40px;
    width:100px;
    background: cyan;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:bold;
    border-radius:10px;
    margin-left:auto;
    margin-right:8px;
    :hover{
        cursor:pointer;
    }`
const Cancel = styled.div`
height:40px;
width:100px;
background: cyan;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
font-weight:bold;
border-radius:10px;
margin-right:auto;
:hover{
    cursor:pointer;
}`
    
const Card = styled.div`
    background: white;
    width:500px;
    height:199px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-radius:20px;
    `
const Form = styled.div`
    display:flex;
    flex-direction:column;
    input{
        margin-bottom:10px;
        font-size:20px;
        width:300px;
        padding:20px;
        border-bottom:2px solid blue;
        border-top: none;
        border-left:none;
        border-right:none;
        margin-top:10px;
        margin-right:10px;
    }input:focus{
        outline:none;
    }
    }`
const Content = styled.div`
    background:rgb(0,0,0,0.7);
    z-index:10;
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    `
