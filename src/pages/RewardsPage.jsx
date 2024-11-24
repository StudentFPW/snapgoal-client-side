import React from 'react';
import TabBar from '../components/TabBar';
import Rewards from '../components/Rewards';

const RewardsPage = () => {

  const user = {
    role: 'admin', // Или 'admin'
    coins: 10,
    name: 'Evan Jons',
    avatar: null,
  };
  
  const handleRewardsClick = () => {
    console.log('Navigating to Rewards');
  };

  const handleSettingsClick = () => {
    console.log('Navigating to Settings');
  };

  const handleLogoutClick = () => {
    console.log('User logged out');
  };

  return (
    <div className="flex bg-background-background">
      <TabBar         
        user={user}
        onRewardsClick={handleRewardsClick}
        onSettingsClick={handleSettingsClick}
        onLogoutClick={handleLogoutClick}
        showGoals={true}
      />
      <Rewards role="admin"/>
    </div>
  );
};

export default RewardsPage;
