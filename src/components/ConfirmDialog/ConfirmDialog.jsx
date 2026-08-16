import "./ConfirmDialog.css";

function ConfirmDialog({ confirmMessage, confirmAction, setActiveModal }) {
    return (
        <div className="confirm-dialog">
            <p className="confirm-message">{confirmMessage}</p>
            <div className="confirm-dialog-btn">
                <button className="confirm-dialog-no-btn" onClick={() => setActiveModal(null)}>
                    No
                </button>
                <button className="confirm-dialog-yes-btn" onClick={confirmAction}>
                    Yes
                </button>
            </div>
            
        </div>
    );
}

export default ConfirmDialog
