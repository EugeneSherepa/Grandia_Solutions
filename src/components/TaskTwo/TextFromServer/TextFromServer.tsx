import { FC, useState, useRef, useEffect } from 'react';
import { Message } from '../../Message/Message';
import { TextResponse } from '../../../types/ResponseBody';
import './textFromServer.scss';

interface Props {
  text: TextResponse[] | null;
  setImage: (value: File | null) => void;
  setText: (value: TextResponse[] | null) => void;
};

export const TextFromServer: FC<Props> = ({ text, setImage, setText }) => {
  const [textToCopy, setTextToCopy] = useState<string>('');
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);
  const textInputRef = useRef<HTMLInputElement | null>(null);

  const handleCopy = () => {
    if (textInputRef.current) {
      textInputRef.current.select();
      document.execCommand('copy'); 

      setShowCopyMessage(true);

      setTimeout(() => {
        setShowCopyMessage(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setImage(null);
    setText(null);
  }

  const handleResetFileInput = () => {
    if (textInputRef.current) {
      textInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (text && text.length > 0) {
      const copiedText = text.map(t => t.text).join(' ');
      setTextToCopy(copiedText);
    }
  }, [text]);

  return (
    <div className="translated-text__container">
        {showCopyMessage && <Message message="Text copied!" showCopyMessage={showCopyMessage}/>}
      <div className='translated-text__buttons'>
        <i className="fa-solid fa-copy" 
          onClick={handleCopy}
        />
        <i className="fa-solid fa-square-xmark" 
          onClick={() => {
            handleClose(); 
            handleResetFileInput();
          }}
        />
      </div>


      <input
        type="text"
        value={textToCopy}
        readOnly
        ref={textInputRef} 
        style={{ position: 'absolute', left: '-9999px' }}
      />

      {text?.map(t => (
      <span key={text.indexOf(t)}>
        {`${t.text} `}
      </span>
      ))}
    </div>
  );
};