import React from 'react'
import Layout from "@/app/components/Layout";


import Overview from './teamComponents/Overview';
import Banner from './teamComponents/Banner';
import ScheduleResults from './teamComponents/ScheduleResults'
import Squads from './teamComponents/Squads';
import PointsTable from './teamComponents/PointsTable';
import News from './teamComponents/News'
import Stats from './teamComponents/Stats'

import Team from './countryComponents/Test';
import Odi from './countryComponents/Odi';
import T20 from './countryComponents/T20';
import IccWorldT20 from './countryComponents/IccWorldT20';
import IccWorldCup from './countryComponents/IccWorldCup';




type Params = Promise<{ teamType: string; teamTap: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const teamTab = params?.teamTap;
  const teamType = params?.teamType;

//  console.log('params', )

  return (
    <Layout>

      {/* <Banner></Banner> */}

      {teamType === 'kkr' && teamTab === "overview" && <Overview />}
      {teamType === 'kkr' && teamTab === "schedule-Results" && <ScheduleResults />}
      {teamType === 'kkr' && teamTab === "squads" && <Squads />}
      {teamType === 'kkr' && teamTab === "points-table" && <PointsTable />}
      {teamType === 'kkr' && teamTab === "news" && <News />}
      {teamType === 'kkr' && teamTab === "stats" && <Stats />}


      
      {teamType === 'india' && teamTab === "test" && <Team />}
      {teamType === 'india' && teamTab === "odi" && <Odi />}
      {teamType === 'india' && teamTab === "t20" && <T20 />}
      {teamType === 'india' && teamTab === "icc-world-t20" && <IccWorldT20 />}
      {teamType === 'india' && teamTab === "icc-world-cup" && <IccWorldCup />}

      

    </Layout>
  )
}
