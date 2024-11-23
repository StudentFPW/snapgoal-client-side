import { useState } from 'react';
import Modal from '../src/components/Modal';
import FinishTask from './components/Modals/FinishTask';
import './App.css'
import Goals from './components/Goals';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRole = 'admin'; // Или 'user'

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFinishTask = (data) => {
    console.log('Task data submitted:', data);
    handleCloseModal();
  };

  // const user = {
  //   role: 'user', // или 'admin'
  //   coins: 10,
  //   name: 'Konstantin Konstantinopolsky',
  //   avatar: null,
  // };

  return (
    <>
      <div className="w-[355px] h-[80px] font-sans text-basic-16-medium text-content-primary">
        Click on the Vite and React logos to learn more
      </div>
      <Goals role={userRole} />
      <button
        onClick={handleOpenModal}
        className="btn-primary px-4 py-2"
      >
        Open Finish Task
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <FinishTask onSubmit={handleFinishTask} />
        </Modal>
      )}
    </>
  )
}

export default App
