import GoalsList from './GoalsList';

const CompletedGoals = () => {
  const mockCompletedGoals = [
    { id: 4, title: 'Tree Planting', description: 'Planted 100 trees in the park', deadline: '01/01/2023', progress: 100 },
    { id: 5, title: 'Charity Run', description: 'Organized a 5k charity run', deadline: '10/10/2022', progress: 100 },
  ];

  return <GoalsList goals={mockCompletedGoals} />;
};

export default CompletedGoals;
