import React from 'react'
import Layout from "@/app/components/Layout";


import MoreInfo from './matchComponents/MoreInfo'
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
import ScheduledStats from './scheduledComponents/Stats'
import ScheduledFantasyTips from './scheduledComponents/FantasyTips'


import ResultBanner from './resultComponents/ResultBanner';
import ResultMoreinfo from './resultComponents/MoreInfo';
import ResultLive from './resultComponents/Live';
import ResultScorecard from './resultComponents/Scorecard';
import ResultSquad from './resultComponents/Squad';
import ResultPointsTable from './resultComponents/PointsTable';
import ResultStats from './resultComponents/Stats';








type Params = Promise<{ matchType: string; matchTab: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const matchTab = params?.matchTab;
  const matchType = params?.matchType;


  //  console.log('params', JSON.stringify(params));


  return (
    <Layout>

      {matchType === 'live' && (
        <>

          <LiveBanner></LiveBanner>

          {matchType === 'live' && matchTab === "more-info" && <MoreInfo />}
          {matchType === 'live' && matchTab === "live" && <Live />}
          {matchType === 'live' && matchTab === "scorecard" && <Scorecard />}
          {matchType === 'live' && matchTab === "squad" && <Squad />}
          {matchType === 'live' && matchTab === "points-table" && <PointsTable />}
          {matchType === 'live' && matchTab === "stats" && <Stats />}
        </>

      )}

      {/* scheduled pages */}

      {matchType === 'scheduled' && (
        <>
          <ScheduledBanner></ScheduledBanner>

          {matchType === 'scheduled' && matchTab === "info" && <Info />}
          {matchType === 'scheduled' && matchTab === "live" && <ScheduledLive />}
          {matchType === 'scheduled' && matchTab === "scorecard" && <ScheduledScorecard />}
          {matchType === 'scheduled' && matchTab === "squad" && <ScheduledSquad />}
          {matchType === 'scheduled' && matchTab === "points-table" && <ScheduledPointsTable />}
          {matchType === 'scheduled' && matchTab === "stats" && <ScheduledStats />}
          {matchType === 'scheduled' && matchTab === "fantasy-tips" && <ScheduledFantasyTips />}


        </>

      )}

      {matchType === 'result' && (
        <>

          <ResultBanner></ResultBanner>

          {matchType === 'result' && matchTab === "more-info" && <ResultMoreinfo />}
          {matchType === 'result' && matchTab === "live" && <ResultLive />}
          {matchType === 'result' && matchTab === "scorecard" && <ResultScorecard />}
          {matchType === 'result' && matchTab === "squad" && <ResultSquad />}
          {matchType === 'result' && matchTab === "points-table" && <ResultPointsTable />}
          {matchType === 'result' && matchTab === "stats" && <ResultStats />}


        </>

      )}

    </Layout>
  )
}
