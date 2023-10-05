import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../Components/Header/DashBoardHeader';
import ActivityCard from '../../Components/Cards/ActivityCard';
import Illustrate from '../../Components/Illustration/Illustrate';
import MyApptsTable from '../../Components/Tables/ApptsTable';
import ApptsPieChart from '../../Components/Charts/ApptsPieChart';
import { FaEyeSlash } from 'react-icons/fa';
import Layout from '../../Layout/layout';
import supabase from '../../auth/supabase';
// import { CreateAppointmentForm } from '../../ui-components'

const ViewAppts = () => {
    const [propertyStats, setPropertyStats] = useState<{ total: number; vacant: number; occupied: number }>({
        total: 0,
        vacant: 0,
        occupied: 0,
      });
      useEffect(() => {
        async function fetchPropertyStats() {
          try {
            const { data, error } = await supabase
              .from('Property')
              .select('id, occupied_status');
    
            if (error) {
              throw error;
            }
    
            const total = data.length;
            const vacant = data.filter(property => !property.occupied_status).length;
            const occupied = total - vacant;
    
            setPropertyStats({ total, vacant, occupied });
          } catch (error) {
            console.error('Error fetching property statistics:', error);
          }
        }
    
        fetchPropertyStats();
      }, []);
    return (
        <Layout>
            <main>
            <DashboardHeader title='View Appointments' icon={FaEyeSlash} />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Appointments
                            </div>
                            <div className="card-body">
                                <MyApptsTable />
                            </div>
                        </div >
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 mb-4">
                        <ActivityCard />
                    </div>
                    <div className="col-xl-6 mb-4">
                        <ApptsPieChart propertyStats={propertyStats} />
                    </div>
                </div>
                <Illustrate />
            </div>
        </main>
        </Layout>
    )
}

export default ViewAppts
