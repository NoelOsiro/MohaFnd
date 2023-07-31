import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  size?: boolean;
  icon: IconType;
  statPromise: Promise<number>;
  colorClass: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, size, statPromise, colorClass, description, imageSrc }) => {
  const [stat, setStat] = useState<number | null>(null);

  useEffect(() => {
    statPromise.then((resolvedStat) => {
      setStat(resolvedStat);
    });
  }, [statPromise]);

  const colClass = size ? 'col-xl-6' : 'col-xl-4';

  return (
    <div className={`${colClass} mb-4`}>
      <a className="card lift h-100" href="#!">
        <div className="card-body d-flex justify-content-center flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <Icon size={30} className={` ${colorClass} mb-3`} />
              <h4>{title}</h4>
              {stat !== null ? (
                <>
                  <h5>{stat}</h5>
                  <div className="text-muted small">{description}</div>
                </>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <img alt='' src={imageSrc} style={{ width: "8rem" }} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
