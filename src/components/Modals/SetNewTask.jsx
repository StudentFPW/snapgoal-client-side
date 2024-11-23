import { useState } from 'react';
import PropTypes from 'prop-types';
import coin from '../../assets/coin.svg';

const SetNewTask = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Easy');
  const [priority, setPriority] = useState('Normal');
  const [deadline, setDeadline] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({ title, description, level, priority, deadline, reward });
      onClose();
    }
  };

  return (
    <div>
      {/* Заголовок и кнопка закрытия */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-sans text-basic-16-medium text-content-primary">Set new task</h2>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit}>
        {/* Поле Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-small-14-medium font-sans text-content-primary mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Set your task title"
            className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
            required
          />
        </div>

        {/* Поле Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-small-14-medium font-sans text-content-primary mb-1">
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

        {/* Уровень и Приоритет */}
        <div className="flex gap-4 mb-4">
          {/* Level */}
          <div className="flex-1">
            <label className="block text-small-14-medium font-sans text-content-primary mb-1">Level</label>
            <div className="flex flex-col gap-2">
              {['Easy', 'Medium', 'Challenging'].map((option) => (
                <label key={option} className="flex items-center gap-2 font-sans text-small-14-regular">
                  <span
                    className={`custom-radio ${
                      level === option ? 'custom-radio-checked' : ''
                    }`}
                  >
                    {level === option && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <input
                    type="radio"
                    name="level"
                    value={option}
                    checked={level === option}
                    onChange={() => setLevel(option)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Priority */}
          <div className="flex-1">
            <label className="block text-small-14-medium font-sans text-content-primary mb-1">Priority</label>
            <div className="flex flex-col gap-2">
              {['Minor', 'Normal', 'Major'].map((option) => (
                <label key={option} className="flex items-center gap-2 font-sans text-small-14-regular">
                  <span
                    className={`custom-radio ${
                      priority === option ? 'custom-radio-checked' : ''
                    }`}
                  >
                    {priority === option && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <input
                    type="radio"
                    name="priority"
                    value={option}
                    checked={priority === option}
                    onChange={() => setPriority(option)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Поле Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-small-14-medium font-sans text-content-primary mb-1">
            Deadline <span className="text-content-secondary">(optional)</span>
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

        {/* Поле Reward */}
        <div className="mb-4">
          <label htmlFor="reward" className="block text-small-14-medium font-sans text-content-primary mb-1">
            Reward <img src={coin} alt="coin" className="inline w-5 h-5 ml-1" />
          </label>
          <input
            id="reward"
            type="number"
            min="0"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
            placeholder="Coins number"
            className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
          />
        </div>

        {/* Кнопка Add Task */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="btn-primary px-4 py-2"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

SetNewTask.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SetNewTask;
