import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../Components/Header/DashBoardHeader';
import ActivityCard from '../../Components/Cards/ActivityCard';
import PieChart from '../../Components/Charts/PieChart';
import Illustrate from '../../Components/Illustration/Illustrate';
import { SearchField } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { Patient } from '../../models';
import { IPatient } from '../../Services/CustomerService';
import { FaBookDead } from 'react-icons/fa';
import Layout from '../../Layout/layout';


const BookAppts = () => {
  const [value, setValue] = useState('');
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const patients = await DataStore.query(Patient);
      setPatients(patients as IPatient[]);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const onClear = () => {
    setValue('');
  };

  const handleListItemClick = (patient: IPatient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <Layout>
      <main>
      <DashboardHeader title="Book Appointment" icon={FaBookDead} />
      <div className="container-xl px-4 mt-n10">
        <div className="row">
          <div className="col-xxl-8">
            <div className="card mb-4">
              <div className="card-header border-bottom">Select Patient</div>
              <div className="card-body">
                <SearchField
                  label="search patient name"
                  onChange={onChange}
                  onClear={onClear}
                  value={value}
                />
                {patients.length > 0 ? (
                  <ul>
                    {patients
                      .filter(
                        (patient) =>
                          patient.first_name &&
                          patient.first_name.toLowerCase().includes(value.toLowerCase())
                      )
                      .map((patient) => (
                        <li
                          key={patient.id}
                          onClick={() => handleListItemClick(patient)}
                          style={{ cursor: 'pointer' }}
                        >
                          {patient.first_name} {patient.last_name}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            </div>
            <Illustrate />
            <div className="row">
              <div className="col-xl-6 mb-4">
                <ActivityCard />
              </div>
              <PieChart />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPatient && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Patient Details</h5>
                <button type="button" className="btn-close" title='close' onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>First Name: {selectedPatient.first_name}</p>
                <p>Last Name: {selectedPatient.last_name}</p>
                <p>Email: {selectedPatient.email}</p>
                <p>Date of Birth: {selectedPatient.date_of_birth}</p>
                <p>Phone Number: {selectedPatient.phone_number}</p>
                <p>Gender: {selectedPatient.gender}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    </Layout>
  )
};

export default BookAppts;
