import { FC, useState, useEffect, MouseEvent, FormEvent } from 'react';
import { InputBox } from './InputBox/InputBox';
import { UserInformation } from './UserInformation/UserInfomation';
import { IpResponseBody } from '../../types/ResponseBody';
import { client } from '../../utils/fetchClient';
import { Message } from '../Message/Message';
import './taskOne.scss';

export const TaskOne: FC = () => {
  const [userIp, setUserIp] = useState('');
  const [userInformation, setUserInformation] = useState<IpResponseBody | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setUserMessage] = useState<string>('');

  const handleRequestToServer = (event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const userInput: string = userIp.trim();
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  
    if (userInput.length >= 8 && userInput.length <= 16) {
      if(ipPattern.test(userInput)){
        setIsLoading(true);
        client.get(`/iplookup?address=${userInput}`)
          .then((response: any) => {
            setUserInformation(response);
          })
          .catch((error) => {
            setShowError(true);
            setUserMessage('Error fetching user information:' + error);
          })
          .finally(() => setIsLoading(false));
      }
      else {
        setShowError(true);
        setUserMessage('Incorrect IP address format');
      }
    } else {
      setShowError(true);
      setUserMessage('Incorrect IP address length');
    }
  };

  useEffect(() => {
      setTimeout(() => {
        setShowError(false);
      }, 5000); 
  }, [showError]);

  return (
    <div className="task-one--container">
      <InputBox 
        userIp={userIp}
        setUserIp={setUserIp}
        handleRequestToServer={handleRequestToServer}
        isLoading={isLoading}
      />
      {userInformation !== null && (
        <UserInformation 
          userInformation={userInformation}
        />
      )}

      {showError && (
        <Message 
          message={errorMessage}
          showError={showError}
        />
      )}
    </div>
  )
}