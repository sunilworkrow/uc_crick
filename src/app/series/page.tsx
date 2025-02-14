import React from 'react'
import Layout from "@/app/components/Layout";


import T20Overview from './t20Components/Overview'
import T20Banner from './t20Components/T20Banner'
import T20ScheduleResults from './t20Components/ScheduleResults'
import T20Squads from './t20Components/Squads'
import T20PointsTable from './t20Components/PointsTable';
import T20News from './t20Components/News'
import T20Stats from './t20Components/Stats'


import IplBanner from './iplComponents/IplBanner';
import IplOverview from './iplComponents/Overview';
import IplScheduleResults from './iplComponents/ScheduleResults';
import IplSquads from './iplComponents/Squads';
import IplPointsTable from './iplComponents/PointsTable';
import IplNews from './iplComponents/News';
import IplStats from './iplComponents/Stats'




type Params = Promise<{ seriesType: string; seriesTab: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const seriesTab = params?.seriesTab;
  const seriesType = params?.seriesType;


  //  console.log('params', JSON.stringify(params));

  return (
    <Layout>

      {seriesType === 'T20' && (
        <>

          <T20Banner></T20Banner>

          {seriesType === 'T20' && seriesTab === "overview" && <T20Overview />}
          {seriesType === 'T20' && seriesTab === "schedule-Results" && <T20ScheduleResults />}
          {seriesType === 'T20' && seriesTab === "squads" && <T20Squads />}
          {seriesType === 'T20' && seriesTab === "points-table" && <T20PointsTable />}
          {seriesType === 'T20' && seriesTab === "news" && <T20News />}
          {seriesType === 'T20' && seriesTab === "stats" && <T20Stats />}

        </>

      )}


      {seriesType === 'IPL' && (
        <>

          <IplBanner></IplBanner>

          {seriesType === 'IPL' && seriesTab === "overview" && <IplOverview />}
          {seriesType === 'IPL' && seriesTab === "schedule-results" && <IplScheduleResults />}
          {seriesType === 'IPL' && seriesTab === "squads" && <IplSquads />}
          {seriesType === 'IPL' && seriesTab === "points-table" && <IplPointsTable />}
          {seriesType === 'IPL' && seriesTab === "news" && <IplNews />}
          {seriesType === 'IPL' && seriesTab === "stats" && <IplStats />}

        </>

      )}

    </Layout>
  )
}
