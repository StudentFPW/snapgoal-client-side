import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import coin from '../../assets/coin.svg';

const AddRewardForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', description: '', price: '', image: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file) => {
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl font-bold mb-4">Reward</h2>

      {/* Загрузка файла */}
      <div className="mb-4">
        <InputField onFileUpload={handleFileUpload} />
      </div>

      {/* Поле Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Set your reward title"
          className="w-full p-2 border border-border_layer_1 rounded-md"
          required
        />
      </div>

      {/* Поле Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Provide more details on your reward"
          className="w-full p-2 border border-border_layer_1 rounded-md resize-none"
          rows="3"
        ></textarea>
      </div>

      {/* Поле Price */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium mb-1 flex items-center gap-1">
          Price <img src={coin} alt="Coin" className="w-4 h-4" />
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Coins number"
          className="w-full p-2 border border-border_layer_1 rounded-md"
          required
        />
      </div>

      {/* Кнопки */}
      <div className="flex justify-start gap-4">
        <button
          type="submit"
          className="btn-primary px-4 py-2"
        >
          Add reward
        </button>
      </div>
    </form>
  );
};

AddRewardForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddRewardForm;
