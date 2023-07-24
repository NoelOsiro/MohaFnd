// Card.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FiPackage, FiBook, FiLayout } from 'react-icons/fi';

interface CardProps {
  title: string;
  icon: IconType;
  stat: number;
  colorClass: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon,stat, colorClass, description, imageSrc }) => {
  return (
    <div className="col-xl-4 mb-4">
      <a className="card lift h-100" href="#!">
        <div className="card-body d-flex justify-content-center flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <Icon size={30} className={` ${colorClass} mb-3`} />
              <h4>{title}</h4>
              <h5>{stat}</h5>
              <div className="text-muted small">{description}</div>
            </div>
            <img alt='' src={imageSrc} style={{ width: "8rem" }} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
