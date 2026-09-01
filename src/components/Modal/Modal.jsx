import "./Modal.css";

function Modal({ children, activeModal, childName, setActiveModal}) {
    function closeModal(){
        setActiveModal(null)
    }
    
    const confirmStyle = childName === "Confirm" ? { width: 400 } : {}
    
    return (
        activeModal === childName && (
            <>
                <div className="scrim" onClick={closeModal}></div>
                <dialog open style={confirmStyle}>{children}</dialog>
            </>
        )
    );
}

export default Modal;
