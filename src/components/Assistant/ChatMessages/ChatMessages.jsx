import { useEffect, useRef } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }){
    const chatMessagesRef = useRef(null)

    useEffect(()=>{
        const chatMessagesContainer = chatMessagesRef.current
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
    },[chatMessages])

    return (
        <div className="chat-messages" ref={chatMessagesRef}>
            {
                chatMessages.map(({ id, role, message })=>{
                    return <ChatMessage key={id} role={role} message={message} />
                })
            }
        </div>
    )
}

export default ChatMessages