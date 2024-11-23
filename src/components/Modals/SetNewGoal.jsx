import React, { useState } from 'react';
import PropTypes from 'prop-types';
import close from '../../assets/X.svg';

const SetNewGoal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({ title, description, deadline });
      onClose();
    }
  };

  return (
    <div>
      {/* Заголовок и кнопка закрытия */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-sans text-basic-16-medium text-content-primary">Set new goal</h2>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit}>
        {/* Поле Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-sans text-small-14-medium text-content-primary mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Set your goal title"
            className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
            required
          />
        </div>

        {/* Поле Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-sans text-small-14-medium text-content-primary mb-1"
          >
            Description <span className="text-content-secondary">(optional)</span>
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your goal"
            className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
          />
        </div>

        {/* Поле Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block font-sans text-small-14-medium text-content-primary mb-1">
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            placeholder="dd/mm/yyyy"
            className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
          />
        </div>

        {/* Кнопка Add Goal */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="btn-primary px-4 py-2"
          >
            Add goal
          </button>
        </div>
      </form>
    </div>
  );
};

SetNewGoal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SetNewGoal;
