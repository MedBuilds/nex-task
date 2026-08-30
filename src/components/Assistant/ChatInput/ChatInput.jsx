import { useState } from "react";
import getReply from "../../../utils/getReply";
import assistantTyping from "../../../assets/assistant-typing.gif";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages, assistantInitialMessages }) {
    const [chatMessage, setChatMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const sendStyle = chatMessage.trim() !== "" ? { opacity: 1 } : { opacity: 0.3 };

    function saveChatMessage(event) {
        setChatMessage(event.target.value);
    }

    async function sendMessage() {
        if (chatMessage.trim() !== "" && !isLoading) {
            const newChatMessages = [
                ...chatMessages,
                {
                    id: crypto.randomUUID(),
                    role: "user",
                    message: chatMessage,
                },
            ];

            setChatMessages(newChatMessages);
            setChatMessage("");
            setIsLoading(true)

            setChatMessages([
                ...newChatMessages,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    message: (
                        <img
                            src={assistantTyping}
                            alt="assistant-typing"
                            title="Loading..."
                            width={30}
                        />
                    ),
                },
            ]);

            setChatMessages([
                ...newChatMessages,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    message: await getReply(chatMessage),
                },
            ]);
            
            setIsLoading(false)
        }
    }

    function clearMessages(){
        setChatMessages(assistantInitialMessages)
    }

    function handlKeyDown(event) {
        event.key === "Enter" && sendMessage();
    }

    return (
        <div className="chat-input">
            <button className="chat-input-clear-btn" onClick={clearMessages}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
                <span>Clear chat</span>
            </button>

            <input
                type="text"
                placeholder="Ask me anything..."
                value={chatMessage}
                onChange={saveChatMessage}
                onKeyDown={handlKeyDown}
            />

            <button
                className="chat-input-send-btn"
                onClick={sendMessage}
                style={sendStyle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
            </button>
        </div>
    );
}

export default ChatInput;
