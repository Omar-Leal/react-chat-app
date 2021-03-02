import React from 'react'
import MessagesForm from './MessagesForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {

  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];     
  const renderMessages = () => {
    const keys = Object.keys(messages); // get the msj keys 
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage= userName === message.sender.username;

        return (
          <div key={`msg_~${index}`} style={{width: '100%'}}>
            <div className="message-block">
              {
                isMyMessage 
                ? <MyMessage message={message} /> 
                : <TheirMessage message={message} lastMessageKey={message[lastMessageKey]} />
              }
            </div>
            <div className="read-receipts" style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px'          
             }}>
              read-receipts  
            </div>

          </div>
        )
    })
  }

  renderMessages()

  if(!chat) return 'Loading...O.o';

   return (
     <div className="chat-feed">
       <div className="chat-title-container">
            <div className="chat-title">
              {chat?.title}
            </div>
            <div className="chat-subtitle">
              {chat.people.map((person) => `${person.person.username}`)}
            </div>
       </div>
       {renderMessages()}
       <div style={{ height: '100px'}} />
       <div className="message-form-container">
          <MessagesForm {...props} chatId={activeChat} />
       </div>
     </div>
   )
}

export default ChatFeed;

