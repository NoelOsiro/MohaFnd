import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  icon: IconType;
  statPromise: Promise<number>; // Rename prop to statPromise, indicating that it's a Promise of number
  colorClass: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, statPromise, colorClass, description, imageSrc }) => {
  const [stat, setStat] = useState<number | null>(null);

  useEffect(() => {
    // When the component mounts, wait for the Promise to resolve and update the state with the actual value
    statPromise.then((resolvedStat) => {
      setStat(resolvedStat);
    });
  }, [statPromise]);

  return (
    <div className="col-xl-4 mb-4">
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
                // Render a loading state while the data is being fetched
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
