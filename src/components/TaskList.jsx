import React, { useEffect, useState } from 'react';
import Goal from './GoalItem';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://api.example.com/goals'); // Заменить URL на API
        setTasks(response.data);
        setLoading(false);
      } catch (err) {
        setError('Ошибка при загрузке целей');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">List of goals</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => <Goal key={task.id} goal={task} />)
      ) : (
        <p>There is no tasks now!</p>
      )}
    </div>
  );
};

export default TaskList;
