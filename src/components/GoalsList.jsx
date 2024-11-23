import React, { useEffect, useState } from 'react';
import GoalItem from './GoalItem';
import axios from 'axios';

// Моковые данные
const mockGoals = [
  {
    id: 1,
    title: 'Learn React',
    description: 'Understand the basics of React and build a simple app.',
    progress: 20,
    startDate: '01/11/2024',
    endDate: '30/11/2024',
    userCount: 5,
  },
  {
    id: 2,
    title: 'Improve CSS Skills',
    description: 'Practice advanced CSS techniques, including Tailwind CSS.',
    progress: 50,
    startDate: '01/10/2024',
    endDate: '30/12/2024',
    userCount: 3,
  },
  {
    id: 3,
    title: 'Team Collaboration',
    description: 'Work with team members to complete project milestones.',
    progress: 80,
    startDate: '01/09/2024',
    endDate: '30/09/2024',
    userCount: 8,
  },
];

const GoalsList = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('https://api.example.com/goals'); // Заменить URL на API
        setGoals(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setGoals(mockGoals); // Используем моковые данные в случае ошибки
        setError('Ошибка при загрузке целей. Отображаются тестовые данные.');
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) console.warn(error);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">List of Goals</h1>
      {goals.length > 0 ? (
        <div className="space-y-4">
          {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">There are no goals at the moment!</p>
      )}
    </div>
  );
};

export default GoalsList;
