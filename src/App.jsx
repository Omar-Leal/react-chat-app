import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './styles/App.css'


const App = () => {
    return (
      <ChatEngine 
        height="100vh"
        projectID="
        ad454e1a-5787-460e-94d7-27cf99cc4726"
        userName="omar_leal"        
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      
      />
        
      
    )
}

export default App;