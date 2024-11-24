import React from 'react';
import PropTypes from 'prop-types';
import clock from '../assets/Clock.svg';
import userIcon from '../assets/Users.svg';

const GoalItem = ({ goal, onClick }) => {
  return (
    <div
      className="w-[350px] min-h-[125px] p-4 border rounded-[16px] shadow-md bg-white flex flex-col gap-2 cursor-pointer"
      onClick={() => onClick(goal)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-basic-16-medium font-sans text-content-primary">{goal.title}</h2>
        <p className="text-basic-16-medium font-sans text-content-primary">{goal.progress}%</p>
      </div>
      <p className="text-basic-16-regular font-sans text-content-secondary text-left">{goal.description}</p>
      <div className="flex justify-between items-center font-sans text-small-14-regular text-content-primary">
        <div className="flex items-center gap-2">
          <img src={clock} className="w-4 h-4" />
          <span>{goal.startDate} – {goal.endDate}</span>
        </div>
        <div className="flex items-center gap-2 h-[21px]">
          <img src={userIcon} className="w-4 h-4" />
          <span>{goal.userCount}</span>
        </div>
      </div>
    </div>
  );
};

GoalItem.propTypes = {
  goal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    progress: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    userCount: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GoalItem;
