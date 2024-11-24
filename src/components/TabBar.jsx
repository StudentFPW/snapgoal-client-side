import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import UserMenu from './UserMenu';

const TabBar = ({
  user,
  onRewardsClick,
  onSettingsClick,
  onLogoutClick,
  showGoals,
  fetchGoals,
  onGoalClick,
}) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    if (showGoals) {
      const loadGoals = async () => {
        try {
          const data = await fetchGoals();
          setGoals(data);
        } catch (error) {
          console.error('Ошибка загрузки целей:', error);
          setGoals([]);
        }
      };
      loadGoals();
    }
  }, [showGoals, fetchGoals]);

  return (
    <div className="w-[250px] flex flex-col justify-between h-full">
      {/* Логотип */}
      <div className="p-6">
        <h1 className="text-2xl font-racing text-content-primary font-bold">Snapgoal</h1>
      </div>

      {/* Список целей (если showGoals === true) */}
      {showGoals && (
        <div className="px-6 mb-6">
          {goals.length > 0 ? (
            <div className="flex flex-col gap-2">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => onGoalClick(goal.id)}
                  className="text-small-14-medium font-sans text-content-primary text-left hover:underline"
                >
                  {goal.title}
                </button>
              ))}
              <button
                onClick={() => onGoalClick('all')}
                className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
              >
                View all goals
              </button>
            </div>
          ) : (
            <p className="text-small-14-regular text-content-secondary">
              No goals available.
            </p>
          )}
        </div>
      )}

      {/* Меню пользователя */}
      <div className="p-4">
        <UserMenu
          user={user}
          onRewardsClick={onRewardsClick}
          onSettingsClick={onSettingsClick}
          onLogoutClick={onLogoutClick}
        />
      </div>
    </div>
  );
};

TabBar.propTypes = {
  user: PropTypes.shape({
    // role: PropTypes.string.isRequired,
    coins: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  onRewardsClick: PropTypes.func,
  onSettingsClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  showGoals: PropTypes.bool, 
  fetchGoals: PropTypes.func, 
  // onGoalClick: PropTypes.func.isRequired, 
};

TabBar.defaultProps = {
  showGoals: false, 
  fetchGoals: async () => [], 
};

export default TabBar;
