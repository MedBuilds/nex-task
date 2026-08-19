import dayjs from "dayjs";
import "./SearchDetail.css";

function SearchDetail({ searchedTask, setActiveModal }) {
    return (
        <div className="search-detail">
            <h2 className="search-detail-title">{searchedTask.title}</h2>

            <h3 className="search-detail-description">
                {searchedTask.description}
            </h3>

            <div className="search-detail-footer">
                <div className="search-detail-dueDate">
                    {searchedTask.dueDate ? (
                        <h3>• Deadline: {dayjs(searchedTask.dueDate).format("DD MMM YYYY")}</h3>
                    ) : (
                        <h3>• No deadline</h3>
                    )}
                </div>

                <div className="search-detail-badges">
                    <h3
                        className={`search-detail-status search-detail-status-${searchedTask.status}`}
                    >
                        {searchedTask.status[0].toUpperCase() + searchedTask.status.slice(1)}
                    </h3>
                    
                    <h3
                        className={`search-detail-priority search-detail-priority-${searchedTask.priority}`}
                    >
                        {searchedTask.priority[0].toUpperCase() + searchedTask.priority.slice(1)}
                    </h3>
                </div>
            </div>

            <p className="search-detail-createDate">
                Created at: {dayjs(searchedTask.createAt).format("DD MMM YYYY")}
            </p>

            <button
                className="search-detail-back-btn"
                onClick={() => setActiveModal("Search")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                </svg>
            </button>

            <button
                className="search-detail-close-btn"
                onClick={() => setActiveModal(null)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
        </div>
    );
}

export default SearchDetail;
