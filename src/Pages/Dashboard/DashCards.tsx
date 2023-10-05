import React from 'react'
import Card from '../../Components/Cards/DasCard'
import { FiBook, FiLayout, FiHome } from 'react-icons/fi';

interface Iprops {
  propertyStats: {
    total:number;
    vacant:number;
    occupied:number;
  }
}

const DashCards: React.FC<Iprops> = (props:Iprops) => {  
    return (
                <>
                    <Card
                        title={'My Properties'}
                        icon={FiHome}
                        colorClass={'text-primary'}
                        description={'Total Properties'}
                        imageSrc={'assets/img/illustrations/browser-stats.svg'}
                        count={props.propertyStats.total} />
                    <Card
                        title={'Vacant'}
                        icon={FiBook}
                        colorClass={'text-danger'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/processing.svg'}
                        count={props.propertyStats.vacant} />
                    <Card
                        title={'Occupied'}
                        icon={FiLayout}
                        colorClass={'text-success'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/windows.svg'}
                        count={props.propertyStats.occupied} />
                </>
    )
}

export default DashCards