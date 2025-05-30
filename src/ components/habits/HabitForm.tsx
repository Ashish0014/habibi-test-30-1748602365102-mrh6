import React, { useState } from 'react';
import { Habit } from '@/types';

interface HabitFormProps {
  onSubmit: (habit: Habit) => void;
}

/**
 * Component for creating a new habit.
 * @param {HabitFormProps} props - The props for the component
 * @returns JSX.Element
 */
const HabitForm: React.FC<HabitFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newHabit: Habit = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      description,
      completed: false,
    };

    onSubmit(newHabit);
    setName('');
    setDescription('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-2 p-2 border" />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mb-2 p-2 border" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add Habit</button>
    </div>
  );
};

export default HabitForm;