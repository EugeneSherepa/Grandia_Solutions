import { FC } from 'react';
import { IpResponseBody } from '../../../types/ResponseBody';
import './userInformation.scss';

interface Props {
  userInformation: IpResponseBody | null;
};

export const UserInformation: FC<Props> = ({ userInformation }) => {
  return (
    <div className="userInformation">
      <h1 className="userInformation__home">{userInformation?.country},{userInformation?.city}</h1>
      <div className="userInformation__location--container">
      <p><i className="fas fa-map-marker-alt"></i> Latitude: {userInformation?.lat}</p>
  <p><i className="fas fa-map-marker-alt"></i> Longitude: {userInformation?.lon}</p>
      </div>
      <p className="userInformation__timezone">Timezone: {userInformation?.timezone}</p>
    </div>
  );
};