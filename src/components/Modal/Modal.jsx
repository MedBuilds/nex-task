import "./Modal.css";

function Modal({ children, activeModal, childName, setActiveModal}) {
    function closeModal(){
        childName === "Search" && setActiveModal(null)
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
