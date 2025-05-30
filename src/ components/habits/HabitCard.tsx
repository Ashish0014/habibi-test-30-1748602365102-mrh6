import React from 'react';
import { Habit } from '@/types';
import classNames from 'classnames';

interface HabitCardProps {
  habit: Habit;
}

/**
 * Component to display a single habit card.
 * @param {HabitCardProps} props - The props for the component
 * @returns JSX.Element
 */
const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold">{habit.name}</h3>
      <p className="text-sm text-gray-500 mt-2">{habit.description}</p>
      <p className={classNames('mt-4', { 'text-green-500': habit.completed, 'text-red-500': !habit.completed })}>
        {habit.completed ? 'Completed' : 'Not Completed'}
      </p>
    </div>
  );
};

export default HabitCard;