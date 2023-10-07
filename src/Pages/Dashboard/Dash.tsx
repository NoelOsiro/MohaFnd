import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import TaskTrackerCard from '../../Components/Cards/TaskTrackerCard'
import { FcHome } from 'react-icons/fc'
import ApptsPieChart from '../../Components/Charts/ApptsPieChart'
import Layout from '../../Layout/layout'
import DashCards from './DashCards'
import supabase from '../../auth/supabase';
import StaffCard from '../../Components/Cards/StaffCard'
import LineChart from '../../Components/Charts/DashCharts'
import MyDataTable from '../../Components/Tables/ActivityTable'


const Dash = () => {
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
      const OverviewTabContent = () => (
        <div className="chart-area mb-4 mb-lg-0" style={{ height: '24rem' }}>
          <h3 className="lead">Service calls Trend</h3>
          <LineChart />
        </div>
      );
      
      const ActivitiesTabContent = () => <MyDataTable />;
    return (
        <Layout>
            <main>
                <DashboardHeader title='Home' icon={FcHome} />
                <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <DashCards propertyStats={propertyStats}  />
                    </div>
                    <TabDashBoard ActivitiesTabContent={ActivitiesTabContent} OverviewTabContent={OverviewTabContent} />
                    <div className="row">
                        <ActivityCard />
                        <ApptsPieChart propertyStats={propertyStats} />
                    </div>
                    <div className="row">
                        <StaffCard />
                        <TaskTrackerCard />
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Illustrate />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Dash
