import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { cards } from '../../Components/Cards/CardData'
import Card from '../../Components/Cards/DasCard'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PeopleCard from '../../Components/Cards/PeopleCard'
import TaskTrackerCard from '../../Components/Cards/TaskTrackerCard'
import { FcHome } from 'react-icons/fc'
import ApptsPieChart from '../../Components/Charts/ApptsPieChart'
import Layout from '../../Layout/layout'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchData } from '../../Services/FetchDashData'


const Dash = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchApiData = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          const apiEndpoint = process.env.REACT_APP_API_ENDPOINT! + '/appointments/dash'; // Get the API endpoint from environment variables

          const responseData = await fetchData(apiEndpoint, accessToken);
          setData(responseData);
          localStorage.setItem('apptsData', JSON.stringify(responseData));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchApiData();
  }, [isAuthenticated, getAccessTokenSilently]);
    return (
        <Layout>
             <main>
            <DashboardHeader title='Home' icon={FcHome} />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <TabDashBoard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <ActivityCard />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <ApptsPieChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <PeopleCard />
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                        <TaskTrackerCard />
                    </div>
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
