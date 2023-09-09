import { FC } from 'react';
import cn from 'classnames';
import './message.scss'

interface CopyMessageProps {
  message: string;
  showCopyMessage?: boolean;
  showError?: boolean;
}

export const Message: FC<CopyMessageProps> = ({ message, showCopyMessage, showError }) => {

  return (
    <div className={cn("copy-message", {
      "show--success" : showCopyMessage,
      "show--error" : showError 
    })}>
      {message}
    </div>
  );
};
