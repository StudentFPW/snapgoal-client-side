import React from 'react';
import TabBar from '../components/TabBar';
import Rewards from '../components/Rewards';
import { useAuth } from '../core/AuthContext';

const RewardsPage = () => {
  const { role } = useAuth();

  const user = {
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
    <div className="flex bg-background-background h-full">
      <TabBar         
        user={user}
        onRewardsClick={handleRewardsClick}
        onSettingsClick={handleSettingsClick}
        onLogoutClick={handleLogoutClick}
        showGoals={true}
      />
      <Rewards role={role}/>
    </div>
  );
};

export default RewardsPage;
