import React, { useEffect, useRef, useState } from 'react';
import useChat from './UseChat';
import 'tailwindcss/tailwind.css';

const ChatRoom = (props) => {
  const roomId = 'emil';
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState(''); // Message to be sent
  const [closed, setClosed] = useState(true);
  const messageEl = useRef(null);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage('');
  };

  const closeChat = () => {
    setClosed(!closed);
  };

  return (
    <div className='container fixed z-10 bottom-0 w-96'>
      <div
        onClick={closeChat}
        className='cursor-pointer flex justify-between
       text-white p-3 bg-gradient-to-l from-pink-500 to-pink-700 rounded-t-lg'
      >
        <p>Chat with Emil fans</p>
      </div>
      <div
        ref={messageEl}
        className={`messages-container bg-gray-800 max-h-96 overflow-y-scroll ${
          !closed ? 'p-3 h-96' : 'h-0 p-0'
        }`}
      >
        {!closed ? (
          <ol className='flex flex-col messages-list text-white'>
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item mt-2 mb-2 ${
                  message.ownedByCurrentUser
                    ? 'break-words max-w-max p-2 pr-3 pl-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500'
                    : 'break-words max-w-max ml-auto p-2 pr-3 pl-3 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-500'
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        ) : (
          ''
        )}
      </div>
      {!closed ? (
        <form onSubmit={handleSendMessage}>
          <div className='flex'>
            <input
              type='text'
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder='Write message...'
              className='form-input w-9/12 border-none'
            />
            <button
              type='submit'
              className='focus:outline-none focus:ring-0 focus:border-transparent w-3/12 text-white bg-pink-600 pl-5 pr-5 pt-2 pb-2 outline-none border-none'
            >
              Send
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
    </div>
  );
};

export default ChatRoom;
