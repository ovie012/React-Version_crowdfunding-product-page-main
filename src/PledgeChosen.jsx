import React from 'react'

function PledgeChosen({ scrollToTop, clickedPledge }) {
  return (
    <div className='pledge-chosen'>
        <img src="/icon-check.svg" alt="done" />
        <h4>Thanks for your support!</h4>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.</p>
        <button onClick={() => {clickedPledge(); scrollToTop(0);}}>Got it!</button>
    </div>
  )
}

export default PledgeChosen;