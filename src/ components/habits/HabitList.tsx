import React from 'react';
import { Habit } from '@/types';
import HabitCard from './HabitCard';

interface HabitListProps {
  habits: Habit[];
}

/**
 * Component to display a list of habits.
 * @param {HabitListProps} props - The props for the component
 * @returns JSX.Element
 */
const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;