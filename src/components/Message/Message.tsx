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
    <div className={cn("message__show", {
      "message__show--success" : showCopyMessage,
      "message__show--error" : showError ,
    })}>
      {message}
    </div>
  );
};
