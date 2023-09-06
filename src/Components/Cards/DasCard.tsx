import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  size?: boolean;
  icon: IconType;
  colorClass: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, size, colorClass, description, imageSrc }) => {
  const colClass = size ? 'col-xl-6' : 'col-xl-4';
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedApiData = localStorage.getItem('apptsData');
    if (storedApiData) {
      const parsedData = JSON.parse(storedApiData);
      setData(parsedData);
    }
  }, []);

  const renderContent = () => {
    if (data === null) {
      return <div>Loading...</div>;
    }

    let count = 0;
    let countText = '';

    switch (title) {
      case 'Appointment':
        count = data['MissedAppointments'] + data['PendingAppointments'] + data['DoneAppointments'];
        countText = description;
        break;
      case 'Missed':
        count = data['MissedAppointments'];
        countText = description;
        break;
      case 'Pending':
        count = data['PendingAppointments'];
        countText = description;
        break;
      case 'Done':
        count = data['DoneAppointments'];
        countText = description;
        break;
      default:
        break;
    }

    return (
      <>
        <Icon size={30} className={`${colorClass} mb-3`} />
        <h4>{title}</h4>
        <h5>{count}</h5>
        <div className="text-muted small">{countText}</div>
      </>
    );
  };

  return (
    <div className={`${colClass} mb-4`}>
      <a className="card lift h-100" href="#!">
        <div className="card-body d-flex justify-content-center flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              {renderContent()}
            </div>
            <img alt='' src={imageSrc} style={{ width: '8rem' }} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
