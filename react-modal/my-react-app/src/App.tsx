import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    alert('button deleted');
    setIsDeleted(true);
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isDeleted && (
        <button
          onClick={showModal}
          style={{ backgroundColor: 'grey', color: 'white' }}>
          Delete Me!
        </button>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>are you sure you want to delete?</p>
        <button onClick={close}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
