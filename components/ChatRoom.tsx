import React from 'react';
import useChat from './UseChat';
import 'tailwindcss/tailwind.css';

const ChatRoom = (props) => {
  const roomId = 'emil';
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(''); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className='container fixed z-10 bottom-0'>
      <div className='messages-container'>
        <ol className='messages-list text-white'>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <div className='flex flex-wrap '>
        <form onSubmit={handleSendMessage}>
          <input
            type='text'
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder='Write message...'
            className='form-input'
          />
          <button
            type='submit'
            className='text-white bg-pink-500 pl-5 pr-5 pt-2 pb-2 outline-none border-none'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
