import Header from "../../components/Header/Header";
import "./AssistantPage.css";

function AssistantPage() {
    return (
        <div className="assistant-page">
            <title>NexTask - Assistant</title>

            <Header title="Assistant" actions={false} />
        </div>
    );
}

export default AssistantPage;
