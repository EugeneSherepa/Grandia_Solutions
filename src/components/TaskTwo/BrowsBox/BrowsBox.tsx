import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './browsBox.scss';

interface Props {
  setImage: (value: File) => void;
  handleTranslate: () => void;
  imageToServer: File | null;
  isLoading: boolean;
}

export const BrowsBox: FC<Props> = ({ 
  setImage, 
  handleTranslate, 
  imageToServer,
  isLoading,
}) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  return (
    <div className="brows-box">
      {isLoading && (
        <div className="brows-box__loader">
          <Box sx={{ display: 'flex' }}>
            <CircularProgress color="inherit"/>
          </Box>
        </div>
      )}
      <div className="brows-box__container">
      <input
        type="file"
        className="brows-box__input"
        id='input'
        accept=".png, .jpeg, .jpg"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label className="brows-box__input" htmlFor="input">
        {imageToServer ? (
          <span 
            className='brows-box__text'
            title={imageToServer.name}
          >
            {imageToServer.name.length > 18 ? (
              imageToServer.name.slice(0, 18) + '...'
            ): (
              imageToServer.name
            )}
          </span>
        ) : (
          <span className='brows-box__text'>Drag Your File Here</span>
        )}
      </label>
        <button 
          type="submit"
          className="fa-solid fa-paper-plane brows-box__button" 
          onClick={handleTranslate}
        />
      </div>
    </div>
  )
}

