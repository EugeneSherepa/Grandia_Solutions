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
    <div className="toggle">
      <span className="toggle__task">Task 1</span>
      <input 
        className={cn('toggle__input', {
          'toggle__input--active': !isFirstTaskActive
        })}
        type="checkbox" 
        id="billingToggle"
        onChange={handleToggleChange}
        checked={!isFirstTaskActive} 
      />
      <label htmlFor="billingToggle" className="toggle__switch">
        <div className="toggle__ball"></div>
      </label>
      <span className="toggle__task">Task 2</span>
    </div>
  );
};
