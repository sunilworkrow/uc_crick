import React from 'react'
import MoreInfo from './matchComponents/MoreInfo'
import Layout from "@/app/components/Layout";

import Live from './matchComponents/Live';
import Scorecard from './matchComponents/Scorecard';
import Squad from './matchComponents/Squad';
import PointsTable from './matchComponents/PointsTable';
import Stats from './matchComponents/Stats';
import Info from './scheduledComponents/Info';
import LiveBanner from './matchComponents/LiveBanner';
import ScheduledBanner from './scheduledComponents/ScheduledBanner';
import ScheduledLive from './scheduledComponents/Live';
import ScheduledScorecard from './scheduledComponents/Scorecard'
import ScheduledSquad from './scheduledComponents/Squad'
import ScheduledPointsTable from './scheduledComponents/PointsTable'




type Params = Promise<{ matchType: string; matchTab: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const matchTab = params?.matchTab;
  const matchType = params?.matchType;


  // console.log('params', JSON.stringify(params));


  return (
    <Layout>

      {/* <LiveBanner></LiveBanner> */}


      {/* <MoreInfo></MoreInfo> */}


      {matchType === 'live' && matchTab === "more-info" && <MoreInfo />}
      {matchType === 'live' && matchTab === "live" && <Live />}
      {matchType === 'live' && matchTab === "scorecard" && <Scorecard />}
      {matchType === 'live' && matchTab === "squad" && <Squad />}
      {matchType === 'live' && matchTab === "points-table" && <PointsTable />}
      {matchType === 'live' && matchTab === "stats" && <Stats />}


      {/* scheduled pages */}
      <ScheduledBanner></ScheduledBanner>

      {matchType ==='scheduled' && matchTab === "info" && <Info />}

      {matchType ==='scheduled' && matchTab === "live" && <ScheduledLive />}

      {matchType ==='scheduled' && matchTab === "scorecard" && <ScheduledScorecard />}

      {matchType ==='scheduled' && matchTab === "squad" && <ScheduledSquad />}

      {matchType ==='scheduled' && matchTab === "points-table" && <ScheduledPointsTable />}
      {/* {matchType ==='scheduled' && matchTab === "stats" && <Stats />} */}

      {/* {matchType ==='scheduled' && matchTab === "more-info" && <MoreInfo />} */}

      {/* {matchType ==='scheduled' && matchTab === "live" && <Live />} */}


    </Layout>
  )
}
