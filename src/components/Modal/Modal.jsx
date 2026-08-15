import "./Modal.css";

function Modal({ children, activeModal, childName }) {
    return (
        activeModal === childName && (
            <>
                <div className="scrim"></div>
                <dialog open>{children}</dialog>
            </>
        )
    );
}

export default Modal;
