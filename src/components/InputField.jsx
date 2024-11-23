import PropTypes from 'prop-types';
import { useState } from 'react';
import fileIcon from '../assets/File.svg';
import uploadingIcon from '../assets/File2.svg'; 
import errorIcon from '../assets/FileX.svg'; 
import retryIcon from '../assets/Restart.svg'; 
import closeIcon from '../assets/X.svg';

const InputField = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      startUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      startUpload(file);
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const startUpload = (file) => {
    setFileName(file.name);
    setIsUploading(true);
    setProgress(0);
    setIsError(false);
    setIsUploaded(false);

    // Симуляция загрузки с возможной ошибкой
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      if (uploadProgress >= 100) {
        clearInterval(interval);

        // Симуляция ошибки загрузки (50% вероятность)
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          setIsUploading(false);
          setIsUploaded(true); // Устанавливаем успешное состояние
          onFileUpload(file); // Успешно загруженный файл
        } else {
          setIsUploading(false);
          setIsError(true); // Устанавливаем состояние ошибки
        }
      }
    }, 500);
  };

  const retryUpload = () => {
    setProgress(0);
    setIsError(false);
    document.getElementById('fileInput').click();
  };

  const handleRemoveFile = () => {
    setFileName('');
    setProgress(0);
    setIsUploading(false);
    setIsError(false);
    setIsUploaded(false);
  };

  return (
    <div
      className="w-[355px] h-[80px] border border-solid border-gray-300 rounded-lg p-4 flex items-center gap-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isError ? (
        // Состояние ошибки
        <div className="flex items-center gap-2 w-full">
          <img src={errorIcon} alt="Error" className="w-6 h-6" />
          <div className="flex-1">
            <p className="font-sans text-basic-16-medium text-content-primary truncate">
              {fileName}
            </p>
          </div>
          <button
            onClick={retryUpload}
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300"
          >
            <img src={retryIcon} alt="Retry" className="w-4 h-4" />
          </button>
        </div>
      ) : isUploading ? (
        // Состояние загрузки
        <div className="flex items-center gap-2 w-full">
          <img src={uploadingIcon} alt="Uploading" className="w-6 h-6" />
          <div className="flex-1">
            <p className="font-sans text-basic-16-medium text-content-primary truncate">
              {fileName}
            </p>
            <div className="relative w-full h-2 bg-gray-200 rounded mt-1">
              <div
                className="absolute top-0 left-0 h-2 bg-cta-primary rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <span className="font-sans text-small-14-regular text-content-secondary">
            {progress}%
          </span>
        </div>
      ) : isUploaded ? (
        // Состояние успешной загрузки
        <div className="flex items-center gap-2 w-full">
          <img src={uploadingIcon} alt="File" className="w-6 h-6" />
          <div className="flex-1">
            <p className="font-sans text-basic-16-medium text-content-primary truncate">
              {fileName}
            </p>
          </div>
          <button
            onClick={handleRemoveFile}
            className="w-6 h-6 flex items-center justify-center"
          >
            <img src={closeIcon} alt="Remove" className="w-4 h-4" />
          </button>
        </div>
      ) : (
        // Начальное состояние
        <div className="flex items-center gap-2">
          <img src={fileIcon} alt="File" className="w-6 h-6" />
          <span className="font-sans text-basic-16-medium text-content-primary">
            Drag & drop or{' '}
            <button
              type="button"
              onClick={handleClick}
              className="text-cta-primary underline"
            >
              Click to upload
            </button>
          </span>
        </div>
      )}
      <input
        id="fileInput"
        type="file"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
};

InputField.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

export default InputField;
