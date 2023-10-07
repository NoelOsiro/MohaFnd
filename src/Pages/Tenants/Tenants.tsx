import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../Components/Header/DashBoardHeader';
import Illustrate from '../../Components/Illustration/Illustrate';
import PieChart from '../../Components/Charts/PieChart';
import ActivityCard from '../../Components/Cards/ActivityCard';
import Card from '../../Components/Cards/DasCard';
import { FaNewspaper, FaPills, FaServer } from 'react-icons/fa';
import Layout from '../../Layout/layout';
import supabase from '../../auth/supabase';
import TenantsTable from './TenantsTable';
import AddNewTenantForm from './Form/AddTenantForm';

const Tenants = () => {
  const [tenants, setTenants] = useState<any[]>([]);
  const [totalTenants, setTotalTenants] = useState<number>(0);
  const [totalTenantsAddedThisWeek, setTotalTenantsAddedThisWeek] = useState<number>(0);

  useEffect(() => {
    async function fetchTenants() {
      try {
        const { data, error } = await supabase.from('Tenants').select('*');
        if (error) {
          throw error;
        }

        setTenants(data);

        // Calculate total tenant count
        setTotalTenants(data.length);

        // Calculate total tenants added this week
        const today = new Date();
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);
        const tenantsAddedThisWeek = data.filter((tenant) => {
          const tenantAddedDate = new Date(tenant.created_at);
          return tenantAddedDate >= oneWeekAgo;
        });
        setTotalTenantsAddedThisWeek(tenantsAddedThisWeek.length);
      } catch (error) {
        console.error('Error fetching tenants:', error);
      }
    }

    fetchTenants();
  }, []);

  return (
    <Layout>
      <main>
        <DashboardHeader title="Tenants" icon={FaPills} />
        <div className="container-xl px-4 mt-n10">
          <div className="row">
            <Card
              title={'Total'}
              icon={FaServer}
              size={true}
              colorClass={'text-primary'}
              description={'This Week'}
              imageSrc={'assets/img/illustrations/windows.svg'}
              count={totalTenantsAddedThisWeek} // Update count with totalTenantsAddedThisWeek
            />
            <Card
              title={'New'}
              icon={FaNewspaper}
              size={true}
              colorClass={'text-success'}
              description={'Total'} // Change description to 'Total'
              imageSrc={'assets/img/illustrations/processing.svg'}
              count={totalTenants} // Update count with totalTenants
            />
          </div>
          <div className="row">
            <div className="col-xxl-8">
              <div className="card mb-4">
                <div className="card-header border-bottom">Tenants</div>
                <div className="card-body">
                  <div className="tab-content" id="dashboardNavContent">
                    <TenantsTable data={tenants} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <AddNewTenantForm/>
            </div>
          </div>
          <div className="row">
              <ActivityCard />
            <PieChart data={tenants} />
          </div>
          <Illustrate />
        </div>
      </main>
    </Layout>
  );
};

export default Tenants;
