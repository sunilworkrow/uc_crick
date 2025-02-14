import React from 'react'
import Layout from '../components/Layout'


import Team from './manComponents/Team';
import Batter from './manComponents/Batter';
import Bowler from './manComponents/Bowler';
import AllRounder from './manComponents/AllRounder';


import WomanTeam from './womanComponents/Team';
import WomanBatter from './womanComponents/Batter';
import WomanBowler from './womanComponents/Bowler';
import WomanAllRounder from './womanComponents/AllRounder';



type Params = Promise<{ iccRankingType: string; iccRankingTab: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const iccRankingTab = params?.iccRankingTab;
  const iccRankingType = params?.iccRankingType;




  return (
    <Layout>

           {iccRankingType === 'man' && iccRankingTab === "team" && <Team />}
           {iccRankingType === 'man' && iccRankingTab === "batter" && <Batter />}
           {iccRankingType === 'man' && iccRankingTab === "bowler" && <Bowler />}
           {iccRankingType === 'man' && iccRankingTab === "all-rounder" && <AllRounder />}


      {/* <Team></Team> */}

      {iccRankingType === 'woman' && iccRankingTab === "team" && <WomanTeam />}
           {iccRankingType === 'woman' && iccRankingTab === "batter" && <WomanBatter />}
           {iccRankingType === 'woman' && iccRankingTab === "bowler" && <WomanBowler />}
           {iccRankingType === 'woman' && iccRankingTab === "all-rounder" && <WomanAllRounder />}

    </Layout>
  )
}
