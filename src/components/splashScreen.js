import styled from "styled-components"
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi"
import { light } from "@material-ui/core/styles/createPalette";
import { Container } from "@material-ui/core";
function Splash (props) {
    console.log(props)
    function changeTheme() {
        if (props.theme === 'light') {
            props.setTheme('dark');
        }else {
            props.setTheme('light')
        }
    };
    const icon = props.theme === 'light' ? <HiMoon size={15}/> : <CgSun size={15}/>
    return (
       <Toggle onClick = {changeTheme}>
            {icon}
        </Toggle>
       
    );
   
}
const color = function sideColor(){
    return "orange"
}
export default Splash;

const Toggle = styled.button`
    position:absolute;
    left:10px;
    top:5px;
    cursor: pointer;
    z-index:1;
    height:30px;
    width:30px;
    font-size:2px;
    border-radius : 50%;
    border: none;
    background-color: ${props => props.theme.pageBackground};
    color:${props => props.theme.fontColor};
    &:focus {
        outline: none;
    }
    transition : all .5s ease;
`
export const theme = 'orange'