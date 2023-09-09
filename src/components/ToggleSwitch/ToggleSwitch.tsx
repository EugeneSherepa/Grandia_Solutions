import { FC } from 'react';
import cn from 'classnames';
import './toggleSwitch.scss';

interface Props {
  setIsFirstTaskActive: (value: boolean) => void;
  isFirstTaskActive: boolean;
};

export const ToggleSwitch: FC<Props> = ({ setIsFirstTaskActive, isFirstTaskActive }) => {
  const handleToggleChange = () => {
    setIsFirstTaskActive(!isFirstTaskActive);
  };

  return (
    <div className="toggle-switch">
      <span className="task">Task 1</span>
      <input 
        className={cn('toggle-input', {
          'toggle-input__active': !isFirstTaskActive
        })}
        type="checkbox" 
        id="billingToggle"
        onChange={handleToggleChange}
        checked={!isFirstTaskActive} 
      />
      <label htmlFor="billingToggle" className="switch">
        <div className="ball"></div>
      </label>
      <span className="task">Task 2</span>
    </div>
  );
};