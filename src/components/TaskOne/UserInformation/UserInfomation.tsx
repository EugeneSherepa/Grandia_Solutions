import { FC } from 'react';
import { IpResponseBody } from '../../../types/ResponseBody';
import './userInformation.scss';

interface Props {
  userInformation: IpResponseBody | null;
};

export const UserInformation: FC<Props> = ({ userInformation }) => {
  const openGoogleMaps = () => {
    if (userInformation?.lat && userInformation?.lon) {
      const latitude = userInformation.lat;
      const longitude = userInformation.lon;
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="userInformation">
      <h1 className="userInformation__home">{userInformation?.country},{userInformation?.city}</h1>
      <div className="userInformation__location--container">
        <p>Latitude: {userInformation?.lat}</p>
        <i 
        className="fas fa-map-marker-alt userInformation__button"
        onClick={openGoogleMaps}
        />
        <p> Longitude: {userInformation?.lon}</p>
      </div>
      <p className="userInformation__timezone">Timezone: {userInformation?.timezone}</p>
    </div>
  );
};