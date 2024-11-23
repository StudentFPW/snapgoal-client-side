import React, { useEffect, useState } from 'react';
import Goal from './Goal';
import axios from 'axios';

const GoalList = () => {
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
        setError('Ошибка при загрузке целей');
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">List of goals</h1>
      {goals.length > 0 ? (
        goals.map((goal) => <Goal key={goal.id} goal={goal} />)
      ) : (
        <p>There is no goals now!</p>
      )}
    </div>
  );
};

export default GoalList;
