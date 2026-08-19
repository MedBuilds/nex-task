import "./Modal.css";

function Modal({ children, activeModal, childName, setActiveModal}) {
    function closeModal(){
        if (childName === "Search" || childName === "Search-Detail") {
            setActiveModal(null)
        }
    }
    
    return (
        activeModal === childName && (
            <>
                <div className="scrim" onClick={closeModal}></div>
                <dialog open>{children}</dialog>
            </>
        )
    );
}

export default Modal;
