import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ theme, text, onClose }) => {
  const modalElement = document.getElementById("modal");


  const handleOverlayClick = () => {
    onClose();
  };

  useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape" || event.key === "Enter") {
				onClose();
			}
		};
    document.addEventListener("keydown", handleKeyDown );

    return () => {
    document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]); 
	console.log(123);
	
  return createPortal(
    <div className={`modalOverlay ${theme}`} onClick={handleOverlayClick}>
      <div
        className={`modalContent ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="textModalContent">{text}</p>
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    modalElement
  );
};
export default Modal;
