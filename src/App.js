import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Profile/Profile';
import Chat from './components/Navbar/Chat/Chat';
import About from './components/Navbar/About/About';
import Posts from './components/Navbar/Posts/Posts';
import { Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';


const App = (props) => {

    return (
    <div className="appWrapper">
      <div className='appWrapperHeader'>
        <Header />
      </div>
      <div className='appWrapperNavbar'>
        <Navbar />
      </div>
      <div className="appWrapperContent">
        <Posts appState={props.appState} addPost={props.addPost}/>
        {/* <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts state={state} addPost={addPost}/>} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
