const Modal = ({ theme, text, onClose }) => {
	return (
		<div className={`modaOverlay ${theme}`}>
			<div className={`modalContent ${theme}`}>
				<p>{text}</p>
				<button className="closeButton" onClick={onClose}>Close</button>
			</div>
		</div>
	);
};
export default Modal;