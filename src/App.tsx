import { FC, useState } from 'react';
import { TaskOne } from './components/TaskOne/TaskOne';
import { TaskTwo } from './components/TaskTwo/TaskTwo';
import { ToggleSwitch } from './components/ToggleSwitch/ToggleSwitch';
import './App.css';

export const App: FC = () => {
  const [isFirstTaskActive, setIsFirstTaskActive] = useState(true);
  return (
    <div className="App">
      <ToggleSwitch
        setIsFirstTaskActive={setIsFirstTaskActive}
        isFirstTaskActive={isFirstTaskActive}
      />
      {isFirstTaskActive ? (
        <TaskOne />
      ) : (
        <TaskTwo />
      )}
    </div>
  );
}
