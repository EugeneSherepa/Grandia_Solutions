import { FC, useState, useEffect, useRef } from 'react';
import { BrowsBox } from './BrowsBox/BrowsBox';
import { TextFromServer } from './TextFromServer/TextFromServer';
import { client } from '../../utils/fetchClient';
import { TextResponse } from '../../types/ResponseBody';
import { Message } from '../Message/Message';

import './taskTwo.scss'

export const TaskTwo: FC = () => {
  const [imageToServer, setImage] = useState<File | null>(null);
  const [text, setText] = useState<TextResponse[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMesaage, setErrorMessage] = useState<string>('');
  const lastSelectedFile = useRef<File | null>(null);

  const handleTranslate = () => {
    if (imageToServer !== null) {
      setIsLoading(true);

      if (imageToServer !== lastSelectedFile.current) {
        const formData = new FormData();
        formData.append('image', imageToServer);

        client
          .post('/imagetotext', formData)
          .then((response) => {
            if (Array.isArray(response)) {
              const textResponses = response as TextResponse[];
              setText(textResponses);
            } else {
              console.error('Unexpected response format:', response);
            }
          })
          .catch((error) => {
            setShowError(true);
            setErrorMessage('Error while fetching user information:' + error);
          })
          .finally(() => setIsLoading(false));

        lastSelectedFile.current = imageToServer;
      }
    }
    else {
      setShowError(true);
      setErrorMessage('Please, select a file firstly');
    }
  };

  useEffect(() => {
      setTimeout(() => {
        setShowError(false);
      }, 5000); 
  }, [showError]);
  
  return (
    <div className="task-two--container">
      <BrowsBox
        setImage={setImage}
        handleTranslate={handleTranslate}
        imageToServer={imageToServer}
        isLoading={isLoading}
      />
      {(text?.length ?? 0) > 0 && (
        <TextFromServer  
          text={text}
          setImage={setImage}
          setText={setText}
        />
      )}

      {showError  && (
        <Message 
          message={errorMesaage}
          showError={showError}
        />
      )}
    </div>
  )
}