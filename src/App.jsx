import { useState } from 'react';
import Modal from '../src/components/Modal';
import SetNewTask from './components/Modals/SetNewTask';
import './App.css'
import InputField from './components/InputField';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGoal = (goal) => {
    console.log('New Goal:', goal);
  };

  return (
    <>
      <div className="w-[355px] h-[80px] font-sans text-basic-16-medium text-content-primary">
        Click on the Vite and React logos to learn more
      </div>
 
      <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>
      <InputField/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SetNewTask
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddGoal}
        />
      </Modal>
    </>
  )
}

export default App
