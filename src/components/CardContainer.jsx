import PropTypes from 'prop-types';
import { useAuth } from '../core/AuthContext';
import coin from '../assets/coin.svg';

const CardContainer = ({ image, title, coins }) => {
  const { role } = useAuth();

  return (
    <div className="p-5 border rounded-[20px] shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-basic-16-medium font-sans text-content-primary text-center">{title}</h3>

        <div className="flex items-center gap-1 text-content-primary">
          <img src={coin} alt="coin" className="w-4 h-4" />
          <span className="text-basic-16-medium">{coins}</span>
        </div>

        {/* Кнопка отображается только для пользователей */}
        {role === 'user' && (
          <button className="btn-secondary">Redeem</button>
        )}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coins: PropTypes.number.isRequired,
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default CardContainer;
