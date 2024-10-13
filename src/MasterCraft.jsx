import React from 'react'
import MasterCraftTop from './MasterCraftTop';
import MasterCraftMiddle from './MasterCraftMiddle';
import MasterCraftBottom from './MasterCraftBottom';

function MasterCraft({ scrollToTop, clickedPledge, wePledging }) {
  return (
    <>
        <div className="master-craft">
            <MasterCraftTop clickedPledge={clickedPledge} />
            <MasterCraftMiddle />
            <MasterCraftBottom scrollToTop={scrollToTop} wePledging={wePledging} clickedPledge={clickedPledge} />
        </div>
    </>
  )
}

export default MasterCraft;