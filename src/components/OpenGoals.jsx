import GoalsList from './GoalsList';

const OpenGoals = () => {
  const mockGoals = [
    { id: 1, title: 'Beach Clean-up', description: 'Clean beaches around Limassol', deadline: '01/05/2025', progress: 0 },
    { id: 2, title: 'Olive Harvest', description: '', deadline: 'dd/mm/yyyy', progress: 0 },
    { id: 3, title: 'Cyprus Wildlife Protection', description: 'Protect local species like sea turtles', deadline: 'dd/mm/yyyy', progress: 0 },
  ];

  return <GoalsList goals={mockGoals} />;
};

export default OpenGoals;
