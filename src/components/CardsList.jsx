import CardContainer from './CardContainer';
import PropTypes from 'prop-types';
import { useAuth } from '../core/AuthContext';

const mockCards = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Amazon eGift Card',
    coins: 10,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Google Play Gift Card',
    coins: 15,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Netflix Gift Card',
    coins: 20,
  },
];

const CardsList = ({ rewards }) => {
  const { role } = useAuth();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {mockCards.map((card) => (
        <CardContainer
          key={card.id}
          image={card.image}
          title={card.title}
          coins={card.coins}
          role={role}
        />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default CardsList;
