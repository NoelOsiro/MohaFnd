import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FaCashRegister } from 'react-icons/fa'
import Layout from '../../Layout/layout'
import supabase from '../../auth/supabase'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import LineChart from '../../Components/Charts/DashCharts'
import MyDataTable from '../../Components/Tables/ActivityTable'

const Payments = () => {
    const [payments, setPayments] = useState<any[]>([]);
    useEffect(() => {
        async function fetchPayments() {
            try {
                const { data, error } = await supabase.from('Payments').select('*');
                if (error) {
                    throw error;
                }
                setPayments(data);
            } catch (error) {
                console.error('Error fetching tenants:', error);
            }
        }
        fetchPayments();
    }, []);
    const OverviewTabContent = () => (
        <div className="chart-area mb-4 mb-lg-0" style={{ height: '24rem' }}>
          <h3 className="lead">Income</h3>
          <LineChart />
        </div>
      );
      
      const ActivitiesTabContent = () => <MyDataTable />;
    return (
        <Layout>
            <main>
                <DashboardHeader title='Payments' icon={FaCashRegister} />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                <TabDashBoard ActivitiesTabContent={ActivitiesTabContent} OverviewTabContent={OverviewTabContent} />
                </div>
            </main>
        </Layout>

    )
}

export default Payments
