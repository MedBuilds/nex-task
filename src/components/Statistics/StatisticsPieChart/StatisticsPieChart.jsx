import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import "./StatisticsPieChart.css";

function StatisticsPieChart({ data, totalTasks }) {
    const colors = [
        "var(--priority-high)",
        "var(--priority-medium)",
        "var(--priority-low)",
    ];

    function CustomTooltip({ active, payload }) {
        if (!active || !payload || !payload.length) return null;

        const item = payload[0];
        const percent = ((item.value / totalTasks) * 100).toFixed(0);

        return (
            <div
                className={`custom-tooltip custom-tooltip-${item.name.toLowerCase()}`}
            >
                <p className="custom-tooltip-title">• {item.name}</p>
                <p className="custom-tooltip-total">
                    <span>{item.value}</span> {item.value === 1 ? "task" : "tasks"} {item.name.toLowerCase()}
                </p>
                <p className="custom-tooltip-total">
                    <span>{percent}%</span> of all tasks
                </p>
            </div>
        );
    }

    return (
        <div className="statistics-pie-chart">
            <div className="statistics-pie-chart-title">
                <h2>Task distribution</h2>
            </div>

            <div className="statistics-pie-chart-graph">
                <ResponsiveContainer width="70%" height={350}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="total"
                            nameKey="status"
                            innerRadius={60}
                            strokeWidth={0}
                        >
                            {data.map((status, index) => {
                                return (
                                    <Cell
                                        key={`Cell-${index}`}
                                        fill={colors[index]}
                                    />
                                );
                            })}
                        </Pie>

                        <Tooltip content={CustomTooltip} />

                        <text
                            x="50%"
                            y="46%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="chart-total"
                        >
                            {totalTasks}
                        </text>
                        <text
                            x="50%"
                            y="54%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="chart-label"
                        >
                            {totalTasks === 1 ? "Task" : "Tasks"}
                        </text>
                    </PieChart>
                </ResponsiveContainer>

                <div className="custom-legend">
                    {data.map((status, index) => {
                        const percent = ((status.total / totalTasks) * 100).toFixed(0);

                        return (
                            <div key={status.status} className="custom-legend-info">
                                <p className="custom-legend-title">
                                    <span
                                        className="custom-legend-dot"
                                        style={{
                                            backgroundColor: colors[index]
                                        }}
                                    ></span>
                                    {status.status}
                                </p>   
                                <p className="custom-legend-percent">
                                    {percent}%
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default StatisticsPieChart;
