import{ createPortal } from 'react-dom'



const Modal = ({ theme, text, onClose }) => {

	const modalElement = 	document.getElementById("modal");



	return createPortal (
		
		<div className={`modalOverlay ${theme}`}>
			<div className={`modalContent ${theme}`}>
				<p>{text}</p>
				<button className="closeButton" onClick={onClose}>Close</button>
			</div>
		</div>,
		modalElement
		

	
	);
};
export default Modal;