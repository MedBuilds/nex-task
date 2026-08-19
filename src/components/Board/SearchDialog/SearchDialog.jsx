import { useState } from "react";
import dayjs from "dayjs";
import "./SearchDialog.css";

function SearchDialog({ tasks, setActiveModal, setSearchedTask }) {
    const [searchTask, setSearchTask] = useState("");

    function saveSearch(event) {
        setSearchTask(event.target.value);
    }

    const filteredTasks = tasks.filter((task) => {
        return task.title.toLowerCase().includes(searchTask.toLowerCase());
    });

    return (
        <div className="search-dialog">
            <div className="search-input">
                <input
                    type="search"
                    placeholder="Search by title..."
                    value={searchTask}
                    onChange={saveSearch}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </div>
            
            <div className="search-results-container">
                {searchTask === "" ? (
                    <p className="search-default-result">Results</p>
                ) : filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => {
                        const searchIndex = task.title.toLowerCase().indexOf(searchTask.toLowerCase());
                        const searchLength = searchTask.length;
                        return (
                            <div 
                                key={task.id} 
                                className="search-result"
                                onClick={()=>{
                                    setSearchedTask(task)
                                    setActiveModal('Search-Detail')
                                }}  
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <p className="search-result-title">
                                    {task.title.slice(0, searchIndex)}
                                    <span>
                                        {task.title.slice(searchIndex,searchIndex + searchLength)}
                                    </span>
                                    {task.title.slice(searchIndex + searchLength)}
                                </p>
                                <p className="search-result-date">
                                    • Created at {dayjs(task.createdAt).format("DD MMM YY")}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p className="search-default-result">No matches found</p>
                )}
            </div>
        </div>
    );
}

export default SearchDialog;
