import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined} from '@ant-desing/icons'


const MessagesForm = (props) => {
  const [ value, setValue ] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
      event.preventDefault();
      const text = value.trim()

      if (text.length > 0) sendMessage(creds, chatId, { text });

      setValue('')

  }
  
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId)
  }
  return( 
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
          <input 
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <label htmlFor="upload-button">
             <span className="image-button"></span>
          </label>
      </form>
    </div>
  )
}

export default MessagesForm;