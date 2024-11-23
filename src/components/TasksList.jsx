import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

// Моковые данные
const mockTasks = [
  {
    id: 1,
    title: 'Task title 1',
    description: 'Description for task 1',
    points: 10,
  },
  {
    id: 2,
    title: 'Task title 2',
    description: 'Description for task 2',
    points: 20,
  },
  {
    id: 3,
    title: 'Task title 3',
    description: 'Description for task 3',
    points: 15,
  },
];

const buttons = [
  { label: 'Approve', onClick: () => handleClick('approve'), variant: 'primary' },
  { label: 'Reopen', onClick: () => handleClick('reopen'), variant: 'secondary' },
];

const handleClick = (action) => {
  console.log(`Button clicked: ${action}`);
};

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://api.example.com/tasks'); // Заменить URL на ваш API
        setTasks(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setTasks(mockTasks); // Используем моковые данные при ошибке
        setError('Ошибка при загрузке задач. Отображаются тестовые данные.');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) console.warn(error);

  return (
    <div className="p-4 bg-background min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-content-primary">List of Tasks</h1>
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} joinButton/>)
        ) : (
          <p className="text-content-secondary">There are no tasks now!</p>
        )}
      </div>
    </div>
  );
};

export default TasksList;
