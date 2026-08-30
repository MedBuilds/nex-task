import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInput from "./ChatInput/ChatInput";
import "./Assistant.css";

function Assistant({ setActiveModal, chatMessages, setChatMessages, assistantInitialMessages }) {

    return (
        <div className="assistant">
            <div className="assistant-header">
                <div className="assistant-header-title">
                    <h2>NexTask - Assistant</h2>
                    <h4>Here to help you find your way around</h4>
                </div>
                <button onClick={() => setActiveModal(null)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
            </div>
            <div className="assistant-main">
                <ChatMessages chatMessages={chatMessages} />
                <ChatInput
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                    assistantInitialMessages={assistantInitialMessages}
                />
            </div>
        </div>
    );
}

export default Assistant;
