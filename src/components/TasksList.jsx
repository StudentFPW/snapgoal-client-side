import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TaskItem from './TaskItem';

// Моковые данные
const mockTasks = [
  {
    id: 1,
    title: 'Improve CSS Skills',
    description: 'Practice advanced CSS techniques, including Tailwind CSS.',
    points: 15,
    level: 'Intermediate',
    priority: 'High',
    deadline: '15/12/2024',
    assignee: { name: 'John Doe' },
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Complete React Project',
    description: 'Build a React project for the final submission.',
    points: 20,
    level: 'Advanced',
    priority: 'Critical',
    deadline: '20/12/2024',
    assignee: null,
  },
  {
    id: 1,
    title: 'Improve CSS Skills',
    description: 'Practice advanced CSS techniques, including Tailwind CSS.',
    points: 15,
    level: 'Intermediate',
    priority: 'High',
    deadline: '15/12/2024',
    assignee: { name: 'John Doe' },
    isCompleted: false,
  },
];

const TasksList = ({ role }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userRole = 'user'; // Или 'admin'

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://api.example.com/tasks'); // Заменить URL на ваш API
        setTasks(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setTasks(mockTasks);
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
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} role={userRole} />)
        ) : (
          <p className="text-content-secondary">There are no tasks now!</p>
        )}
      </div>
    </div>
  );
};

TasksList.propTypes = {
  role: PropTypes.oneOf(['user', 'admin']).isRequired,
};

export default TasksList;
