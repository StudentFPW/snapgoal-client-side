import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardsList from './CardsList';
import Modal from './Modal';
import AddRewardForm from './Modals/AddRewardForm';
import { useAuth } from '../core/AuthContext';

const Rewards = () => {
  const { role } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Моковые данные
  const mockRewards = [
    { id: 1, title: 'Amazon eGift Card', points: 100, image: 'amazon-gift-card.png' },
    { id: 2, title: 'GetYourGuide gift card', points: 85, image: 'getyourguide-gift-card.png' },
    { id: 3, title: 'Kigso Games Gift Card', points: 10, image: 'kigso-games-gift-card.png' },
    { id: 4, title: 'Smalltalk2me subscription', points: 20, image: 'smalltalk2me-subscription.png' },
    { id: 5, title: 'TripGift® discount', points: 300, image: 'tripgift-discount.png' },
  ];

  const handleAddRewardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRewardSubmit = (newReward) => {
    console.log('New reward submitted:', newReward);
    setIsModalOpen(false);
    // Логика добавления новой награды (например, обновление состояния с моковыми данными)
  };

  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {/* Заголовок и кнопка */}
      <div className="flex gap-[24px] items-center mb-6">
        <h1 className="text-2xl font-sans font-bold text-content-primary">
          {role === 'admin' ? 'Set rewards for your goals' : 'Exchange your coins for rewards!'}
        </h1>
        {role === 'admin' && (
          <button
            className="btn-icon px-4 py-2"
            onClick={handleAddRewardClick}
          >
            + Add reward
          </button>
        )}
      </div>

      {/* Контент */}
      <CardsList rewards={mockRewards} />

      {/* Модальное окно для добавления награды */}
      {role === 'admin' && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <AddRewardForm onClose={handleModalClose} onSubmit={handleRewardSubmit} />
        </Modal>
      )}
    </div>
  );
};

Rewards.propTypes = {
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default Rewards;
