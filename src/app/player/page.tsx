import React from 'react'
import Layout from "@/app/components/Layout";
import Overview from './playerComponents/Overview';
import Banner from './playerComponents/Banner';
import Stats from './playerComponents/Stats';
import News from './playerComponents/News';
import Photos from './playerComponents/Photos';




type Params = Promise<{ playerType: string; playerTap: string; }>

export default async function page(props: { params: Params }) {

  const params = await props.params;
  const playerTab = params?.playerTap;
  const playerType = params?.playerType;


    //  console.log('params', );


    return (
        <Layout>

            <Banner></Banner>

            {playerType === 'playername' && playerTab === "overview" && <Overview />}
            {playerType === 'playername' && playerTab === "stats" && <Stats />}
            {playerType === 'playername' && playerTab === "news" && <News />}
            {playerType === 'playername' && playerTab === "photos" && <Photos />}

            {/* <Overview></Overview> */}

        </Layout>
    )
}
