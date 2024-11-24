import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import coinIcon from '../assets/coin.svg';
import userAvatar from '../assets/avatar.svg';
import { useAuth } from '../core/AuthContext';

const UserMenu = ({ user, onSettingsClick, onLogoutClick }) => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const handleRewardsClick = () => {
    navigate('/rewards');
  };

  return (
    <div className="w-[250px] p-4">
      {role === 'user' && (
        <>
          {/* Баланс и имя пользователя */}
          <div className="flex items-center gap-4 mb-4">
            <img src={coinIcon} alt="Coins" className="w-6 h-6" />
            <p className="text-basic-16-medium font-sans text-content-primary">
              {user.coins}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user.avatar || userAvatar}
              alt="User Avatar"
              className="w-[24px] h-[24px] rounded-full"
            />
            <p className="text-small-14-regular font-sans text-content-primary text-left">
              {user.name}
            </p>
          </div>

          {/* Ссылки */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleRewardsClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              My rewards
            </button>
            <button
              onClick={onSettingsClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              Settings
            </button>
            <button
              onClick={onLogoutClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              Log out
            </button>
          </div>
        </>
      )}

      {role === 'admin' && (
        <>
          {/* Имя пользователя */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user.avatar || userAvatar}
              alt="User Avatar"
              className="w-[24px] h-[24px] rounded-full"
            />
            <p className="text-small-14-regular font-sans text-content-primary text-left">
              {user.name}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          {/* Ссылки */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleRewardsClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              My rewards
            </button>
            <button
              onClick={onSettingsClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              Settings
            </button>
            <button
              onClick={onLogoutClick}
              className="text-small-14-medium font-sans text-cta-primary text-left hover:underline"
            >
              Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    // role: PropTypes.string.isRequired,
    coins: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default UserMenu;
