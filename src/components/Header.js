import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HiMoon } from "react-icons/hi"
import Splash from "../components/splashScreen"
import {useState} from 'react'
import userEvent from '@testing-library/user-event';


function Header({props, user , signOut}){
            //console.log(prop["light"])
    // const [theme, setTheme] = useState('dark');
    return (
        <Container>
            {/* <ThemeProvider theme={themes[theme]}> */}
            {/* <Splash theme={theme} setTheme={setTheme}/>   */}
            <Main>
                <AccessTimeIcon style={{marginTop:7}}/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search Mc Fresh Continent" />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon style={{marginTop:7}}/>
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.userPhoto ? user.userPhoto : "https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG.png"} />
                </UserImage>
            </UserContainer>
        {/* </ThemeProvider> */}
        </Container>
      
    )
}

export default Header


const Container = styled.div`
    background: ${props => props.theme.sideBackground};
    color: white;
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    border: 2px solid white;

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        height:25px;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 5px;
        padding-bottom: 4px;
    }

    input:focus {
        outline: none;
    }


`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 50px;

    img {
        width: 100%;
        border-radius: 50%
    }
    img:hover {
        cursor:pointer;
    }
`
  
