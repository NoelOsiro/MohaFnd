import React, { useEffect, useState } from 'react';
import supabase from '../../auth/supabase';

const StaffCard = () => {
  const [teams, setTeams] = useState<any[]>([]);
  useEffect(() => {
    async function fetchStaffRequests() {
      try {
        const { data, error } = await supabase
          .from('Staff')
          .select('*')
          .limit(3);
        if (error) {
          throw error;
        }

        setTeams(data);
      } catch (error) {
        console.error('Error fetching maintenance requests:', error);
      }
    }

    fetchStaffRequests();
  }, []);
  return (
    <div className="col-lg-8 col-md-12">
      <div className="card mb-4">
        <div className="card-header">Staff</div>
        <div className="card-body">
          <div className="row">
            {teams.map((person, index) => (
              <div className='col-4'>
                <div className="d-flex align-items-center justify-content-between mb-4" key={index}>
                  <div className="d-flex align-items-center flex-shrink-0 me-3">
                    <div className="avatar avatar-xl me-3 bg-gray-200">
                      <img alt='' className="avatar-img img-fluid" src={'assets/img/illustrations/profiles/profile-1.png'} />
                    </div>
                    <div className="d-flex flex-column fw-bold">
                      <a className="text-dark line-height-normal mb-1" href="#!">{person.first_name} {person.last_name}</a>
                      <div className="small text-muted line-height-normal">{person.role}</div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id={`dropdownPeople${index}`} type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title={`Options for ${person.first_name}`}>
                      <i data-feather="more-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby={`dropdownPeople${index}`}>
                      <a className="dropdown-item" href="#!">View Roster</a>
                      <a className="dropdown-item" href="#!">Notify</a>
                      <a className="dropdown-item" href="#!">Check</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
              <a className="btn btn-primary" href='/staff'>
                See more
              </a>
            </div>
        </div>
      </div>
    </div>

  );
};

export default StaffCard;