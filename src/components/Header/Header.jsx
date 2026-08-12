import "./Header.css";

function Header({ title, actions }) {
    return (
        <header>
            <div className="header-title">
                <h1>NexTask - {title}</h1>
                <h3>
                    Plan <span>•</span> Focus <span>•</span> Achieve
                </h3>
            </div>
            {actions && <div className="header-actions"></div>}
        </header>
    );
}

export default Header;
