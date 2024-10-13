import React from 'react'
import data from './myData.json';

function MasterCraftBottom({ scrollToTop, clickedPledge }) {
  return (
    <div className='master-craft-bottom'>
      <h4>About this project</h4>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      {data.slice(1).map((item, index) => (
        <div key={index} className="bottom-inner">
          <section>
            <h5>{item.pledgeHead}</h5>
            <h6>Pledge ${item.pledgeMore} or more</h6>
          </section>
          <p>{item.pledgeNote}</p>
          <section>
            <div><h3>{item.pledgeAmount}</h3><span>left</span></div>
            <button onClick={() => {clickedPledge(); scrollToTop(100);}}>Select Reward</button>
          </section>
        </div>
      ))}
    </div>
  )
}

export default MasterCraftBottom;