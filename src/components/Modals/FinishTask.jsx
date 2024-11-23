import { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

const FinishTask = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = () => {

    const data = {
      feedback,
      file: uploadedFile,
    };
    onSubmit(data);
  };

  return (
    <div className="">
      {/* Заголовок */}
      <h2 className="font-sans text-basic-16-medium text-content-primary mb-4">
        Finish task
      </h2>

      {/* Инструкция */}
      <p className="text-small-14-regular text-content-primary mb-6">
        Upload a photo to show the result of your work. After the goal manager
        has reviewed your task, you will receive a reward.
      </p>

      {/* Поле загрузки файла */}
      <div className="mb-6">
        <InputField onFileUpload={(file) => setUploadedFile(file)} />
      </div>

      {/* Поле для отзыва */}
      <div className="mb-6">
        <label
          htmlFor="feedback"
          className="block text-small-14-medium font-sans text-content-primary mb-1"
        >
          Share your feedback <span className="text-content-secondary">(optional)</span>
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your thoughts on this task"
          className="w-full border border-border-layer_1 rounded-lg p-2 text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-cta-primary"
          rows="3"
        ></textarea>
      </div>

      {/* Кнопка завершения */}
      <div className="flex justify-start">
        <button
          type="button"
          onClick={handleSubmit}
          className="btn-primary px-4 py-2"
        >
          Finish task
        </button>
      </div>
    </div>
  );
};

FinishTask.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FinishTask;
