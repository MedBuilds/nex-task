import StatisticsCard from "./StatisticsCard/StatisticsCard"
import StatisticsPieChart from "./StatisticsPieChart/StatisticsPieChart"
import './Statistics.css'

function Statistics({tasks}){
    const totalTasks = tasks.length

    const data = [
        {
            status: "Todo",
            total: tasks.filter((task)=>task.status === "todo").length
        },
        {
            status: "In-progress",
            total: tasks.filter((task)=>task.status === "in-progress").length
        },
        {
            status: "Done",
            total: tasks.filter((task)=>task.status === "done").length
        }
    ]

    return (
        <div className="statistics">
            <div className="statistics-cards">
                <StatisticsCard title="Todo" total={data[0].total} totalTasks={totalTasks}/>
                <StatisticsCard title="In-progress" total={data[1].total} totalTasks={totalTasks}/>
                <StatisticsCard title="Done" total={data[2].total} totalTasks={totalTasks}/>
            </div>
            <StatisticsPieChart data={data} totalTasks={totalTasks}/>
        </div>
    )
}

export default Statistics