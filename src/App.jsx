import { useState } from 'react';
import Modal from '../src/components/Modal';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="text-4xl font-bold text-blue-600">
        Click on the Vite and React logos to learn more
      </div>
      <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Модальное окно</h2>
        <p>Это пример контента внутри модального окна.</p>
      </Modal>
    </>
  )
}

export default App
