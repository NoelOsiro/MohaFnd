import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import TeamsTable from '../../Components/Tables/TeamsTable'
import { FaPeopleArrows } from 'react-icons/fa'
import Layout from '../../Layout/layout'
import supabase from '../../auth/supabase';



const Team = () => {
    const [teams, setTeams] = useState<any[]>([]);

    useEffect(() => {
        async function fetchStaff() {
            try {
                const { data, error } = await supabase
                    .from('Staff')
                    .select('*')
                if (error) {
                    throw error;
                }

                setTeams(data);
            } catch (error) {
                console.error('Error fetching maintenance requests:', error);
            }
        }

        fetchStaff();
    }, []);
    return (
        <Layout>
            <main>
                <DashboardHeader title='My Team' icon={FaPeopleArrows} />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                    <div className="row">
                        <div className="col-xxl-8">
                            <div className="card mb-4">
                                <div className="card-header border-bottom">
                                    Staff
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <TeamsTable staffData={teams} />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header border-bottom">
                                    Add New Staff
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        {/* <StaffCreateForm /> */}
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                    <div className="row">
                        <ActivityCard />
                        {/* <PieChart /> */}
                    </div>
                    <Illustrate />
                </div>
            </main>
        </Layout>
    )
}

export default Team
