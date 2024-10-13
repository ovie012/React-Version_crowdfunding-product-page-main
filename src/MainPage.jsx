import React from 'react'
import Banner from './Banner';
import MasterCraft from './MasterCraft';

function MainPage({ scrollToTop, clickedPledge, wePledging }) {
  return (
    <>
        <main>
            <Banner />
            <MasterCraft scrollToTop={scrollToTop} wePledging={wePledging} clickedPledge={clickedPledge} />
        </main>
    </>
  )
}

export default MainPage;