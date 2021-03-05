
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './components/splashScreen'
import {ThemeProvider} from "styled-components";
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import db from './firebase'
import { ContactPhoneSharp } from '@material-ui/icons';
import {auth, provder} from './firebase';
import EmptyChat from './components/EmptyChat'



function App () {
   
  const [theme, setTheme] = useState('light');
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const getChannels = () => {
    db.collection('room').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name };
      }));
    });
  };
  //creating a signout funtion to sign users out onnce clicked on the image
  const signOut = () => {
      auth.signOut().then(() =>{
        localStorage.removeItem('user');
        setUser(null)

      });
  }
  useEffect(() => {
      getChannels();
    }, []);
 
  return (
   <div className="App">
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}/>
      <Router>
        {
          !user ?
          <Login setUser={setUser} theme={theme}/>
          :
        <Container >
          <Header signOut={signOut} user={user} theme={theme}/>
          <Main>
            <Sidebar theme={theme} rooms={rooms}/> 
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user} theme={theme}/>
              </Route>
              <Route path="/">
                <EmptyChat/>
              </Route>
            </Switch>
          </Main>
        </Container>
        }
      </Router>
     </ThemeProvider>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
  background: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  color: ${props => props.theme.fontColor};
  
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
const ligthTheme = {
  pageBackground: "white",
  fontColor: "black",
  sideBackground : "linear-gradient(to bottom, #00c6ff, #0072ff);",
  chatInput:'#0c91c9',
  loginColor :'#cbd4c5'
}
const darkTheme = {
  pageBackground : "black",
  fontColor: 'white',
  sidebarfont : 'red',
  sideBackground: 'linear-gradient(to bottom, #ed213a, #93291e);',
  chatInput: '#961212',
  loginColor: "url(./components/asset/login.gif);"
}
const themes = {
  light : ligthTheme,
  dark : darkTheme
}
