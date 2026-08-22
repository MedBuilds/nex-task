import './StatisticsCard.css'

function StatisticsCard({title, total, totalTasks}){
    const fillStyle = {
        width : `${(total/totalTasks) * 100}%`
    }
    
    return (
        <div className={`statistics-card statistics-${title.toLowerCase()}-card`}>
            <h2 className='statistics-card-title'>• {title}</h2>
            <p className='statistics-card-total'><span>{total}</span> / {totalTasks} tasks</p>
            <div className='statistics-card-progress'>
                <div className='statistics-card-progress-fill' style={fillStyle}></div>
            </div>
        </div>
    )
}

export default StatisticsCard