import { ChangeEvent, FC, MouseEvent, FormEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './inputBox.scss';

interface Props {
  userIp: string;
  setUserIp: (value: string) => void;
  handleRequestToServer: (value: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const InputBox: FC<Props> = ({ 
  userIp, 
  setUserIp, 
  handleRequestToServer,
  isLoading, 
}) => {
  const handleUserApiChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserIp(event.target.value);
  }
  
  return (
    <div className="search-box__container">
      {isLoading && (
        <div className="search-box__loader-backdrop">
          <Box sx={{ display: 'flex' }}>
            <CircularProgress color="inherit"/>
          </Box>
        </div>
      )}
      <form onSubmit={(event) => handleRequestToServer(event)}>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Enter The Ip Adress"
            className="search-box__input"
            value={userIp}
            onChange={(event) => handleUserApiChange(event)}
          />
          <button 
            type="submit"
            className="fa-solid fa-magnifying-glass search-box__button" 
            onClick={(event) => handleRequestToServer(event)}
          />
        </div>
      </form> 
    </div>
  )
}

