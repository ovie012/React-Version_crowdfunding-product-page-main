import React, { useState } from 'react';
import PledgeChoose from './PledgeChoose';
import PledgeChosen from './PledgeChosen';

function Pledge({ scrollToTop, clickedPledge, pledged, pledging, letsPledge, wePledging, selectedPledge, input, errorText, error }) {

  return (
    <div className='pledge'>
      {!pledged ? (
        <PledgeChoose scrollToTop={scrollToTop} error={error} errorText={errorText} input={input} selectedPledge={selectedPledge} letsPledge={letsPledge} wePledging={wePledging} pledging={pledging} clickedPledge={clickedPledge} />
      ) : (
        <PledgeChosen scrollToTop={scrollToTop} clickedPledge={clickedPledge} />
      )}
    </div>
  )
}

export default Pledge;