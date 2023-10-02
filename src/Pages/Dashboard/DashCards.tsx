import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/DasCard'
import { FiBook, FiLayout, FiHome } from 'react-icons/fi';
import supabase from '../../auth/supabase';

const DashCards = () => {
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
                <>
                    <Card
                        title={'My Properties'}
                        icon={FiHome}
                        colorClass={'text-primary'}
                        description={'Total Properties'}
                        imageSrc={'assets/img/illustrations/browser-stats.svg'}
                        count={propertyStats.total} />
                    <Card
                        title={'Vacant'}
                        icon={FiBook}
                        colorClass={'text-danger'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/processing.svg'}
                        count={propertyStats.vacant} />
                    <Card
                        title={'Occupied'}
                        icon={FiLayout}
                        colorClass={'text-success'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/windows.svg'}
                        count={propertyStats.occupied} />
                </>
    )
}

export default DashCards