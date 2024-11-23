import { useState } from 'react';
import Modal from '../src/components/Modal';
import SetNewGoal from './components/Modals/SetNewGoal';
import './App.css'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGoal = (goal) => {
    console.log('New Goal:', goal);
  };

  return (
    <>
      <div className="text-4xl font-bold text-blue-600">
        Click on the Vite and React logos to learn more
      </div>
 
      <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SetNewGoal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddGoal}
        />
      </Modal>
    </>
  )
}

export default App
