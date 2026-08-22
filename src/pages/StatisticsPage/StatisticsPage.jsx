import Header from "../../components/Header/Header";
import Statistics from "../../components/Statistics/Statistics";
import "./StatisticsPage.css";

function StatisticsPage({tasks}) {
    return (
        <div className="statistics-page">
            <title>NexTask - Statistics</title>

            <Header title="Statistics" actions={false} />

            <Statistics tasks={tasks} />
        </div>
    );
}

export default StatisticsPage;
