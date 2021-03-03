import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './styles/App.css'


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
    return (
      <ChatEngine 
        height="100vh"
        projectID="ad454e1a-5787-460e-94d7-27cf99cc4726"
        userName={localStorage.getItem('username')}       
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      
      />
        
      
    )
}

export default App;