import React from 'react';

const peopleData = [
  {
    name: 'Sid Rooney',
    position: 'Position 1',
    avatarSrc: 'assets/img/illustrations/profiles/profile-1.png',
  },
  {
    name: 'Keelan Garza',
    position: 'Position 2',
    avatarSrc: 'assets/img/illustrations/profiles/profile-2.png',
  },
  {
    name: 'Kaia Smyth',
    position: 'Position 3',
    avatarSrc: 'assets/img/illustrations/profiles/profile-3.png',
  },
  {
    name: 'Kerri Kearney',
    position: 'Position 4',
    avatarSrc: 'assets/img/illustrations/profiles/profile-4.png',
  },
  {
    name: 'Georgina Findlay',
    position: 'Position 5',
    avatarSrc: 'assets/img/illustrations/profiles/profile-5.png',
  },
  {
    name: 'Wilf Ingram',
    position: 'Position 6',
    avatarSrc: 'assets/img/illustrations/profiles/profile-6.png',
  },
];

const PeopleCard = () => {
  return (
    <div className="card mb-4">
      <div className="card-header">Staff</div>
      <div className="card-body">
        {peopleData.map((person, index) => (
          <div className="d-flex align-items-center justify-content-between mb-4" key={index}>
            <div className="d-flex align-items-center flex-shrink-0 me-3">
              <div className="avatar avatar-xl me-3 bg-gray-200">
                <img alt='' className="avatar-img img-fluid" src={person.avatarSrc} />
              </div>
              <div className="d-flex flex-column fw-bold">
                <a className="text-dark line-height-normal mb-1" href="#!">{person.name}</a>
                <div className="small text-muted line-height-normal">{person.position}</div>
              </div>
            </div>
            <div className="dropdown no-caret">
              <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id={`dropdownPeople${index}`} type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title={`Options for ${person.name}`}>
                <i data-feather="more-vertical"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby={`dropdownPeople${index}`}>
                <a className="dropdown-item" href="#!">Action</a>
                <a className="dropdown-item" href="#!">Another action</a>
                <a className="dropdown-item" href="#!">Something else here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleCard;