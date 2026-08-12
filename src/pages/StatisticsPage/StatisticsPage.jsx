import Header from "../../components/Header/Header";
import "./StatisticsPage.css";

function StatisticsPage() {
    return (
        <div className="statistics-page">
            <title>NexTask - Statistics</title>

            <Header title="Statistics" actions={false} />
        </div>
    );
}

export default StatisticsPage;
