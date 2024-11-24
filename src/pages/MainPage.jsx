// import { useAuth } from '../core/AuthContext';

import TabBar from "../components/TabBar";
import Tasks from "../components/Tasks";
// import Goals from "../components/Goals";

const MainPage = () => {

  const user = {
    role: 'user', // Или 'admin'
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
      <Tasks role="user"/>
    </div>
  );
};

export default MainPage;
