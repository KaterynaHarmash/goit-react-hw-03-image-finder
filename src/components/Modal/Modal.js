import Modal from 'react-modal';
import { LargeImg } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    height: '90%',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1999,
  },
};
Modal.setAppElement('#root');

export const ModalBox = ({ large, alt, isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={alt}
    >
      <LargeImg src={large} alt={alt} />
    </Modal>
  );
};
