import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import close from '../assets/X.svg';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Рендер через портал
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={close}/>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};


Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, 
};

export default Modal;
