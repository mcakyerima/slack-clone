import { React, useState} from 'react'
import styled from 'styled-components';
import db from '../firebase';


function AddChannels({showMessage}) {
    const [name , addName ] = useState();
    
    const update = (e) => {
        const result = name
        db.collection('room').add({name: result});
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
    height:41px;
    color:white;
    width:110px;
    background: #20e64e;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:normal;
    border-radius:10px;
    margin-left:auto;
    margin-right:8px;
    :hover{
        cursor:pointer;
        box-shadow: -1px -1px 27px -2px rgba(0,0,0,0.31);
    }`
const Cancel = styled.div`
height:39px;
color:#20e64e;
width:100px;
background: none;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
font-weight:bold;
border:1px solid #20e64e;
border-radius:10px;
margin-right:auto;
:hover{
    cursor:pointer;
    background: #20e64e;
    color: white;
    box-shadow: -1px -1px 27px -2px rgba(0,0,0,0.31);
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
        width:350px;
        padding:20px;
        border-bottom:2px solid #20e64e;
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
    background-size:cover;
    min-height: 100%;
    min-width:100%;
    width:100%;
    height:auto;
    z-index:10;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    
    `
