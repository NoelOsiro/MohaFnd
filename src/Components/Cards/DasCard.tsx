import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  size?: boolean;
  icon: IconType;
  colorClass: string;
  description: string;
  imageSrc: string;
  count: number;
}

const Card: React.FC<CardProps> = (props:CardProps) => {
  const colClass = props.size ? 'col-xl-6 col-lg-6' : 'col-xl-4 col-lg-4';
  return (
      <div className={`${colClass} mb-4`}>
        <div className="card lift h-100">
          <div className="card-body d-flex justify-content-center flex-column">
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <props.icon size={30} className={`${props.colorClass} mb-3`} />
                <h4>{props.title}</h4>
                <h5>{props.count}</h5>
                <div className="text-muted small">{props.description}</div>
              </div>
              <img alt='' src={props.imageSrc} style={{ width: '8rem' }} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
