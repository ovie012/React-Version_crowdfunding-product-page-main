import React, { useState } from 'react';
import data from './myData.json';

function PledgeChoose({ scrollToTop, clickedPledge, pledging, letsPledge, wePledging, selectedPledge, input, errorText, error }) {
  
  return (
    <div className='pledge-choose'>
        <img onClick={() => {clickedPledge(); scrollToTop(0);}} src="/icon-close-modal.svg" alt="close" />
        <h4>Back this project</h4>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        {data.map((item, index) => (
          <section key={index} className={item === selectedPledge ? 'active' : ''} >
            <div className={`inner-pledge ${item === selectedPledge ? 'active' :''}`}>
              <span></span>
              <div className='inner-pledge-div'>
                <div className='inner-inner-pledge'>
                  <div>
                    <h5 onClick={() => {wePledging(item);}}>{item.pledgeHead}</h5>
                    {item.pledgeMore > 0 && <h6>Pledge ${item.pledgeMore} or more</h6>}
                  </div>
                  <div>
                    <h5>{item.pledgeAmount}</h5>
                    <aside>{item.pledgeLeft}</aside>
                  </div>
                </div>
                <p>{item.pledgeNote}</p>
              </div>
            </div>
            <div className={`inner-pledge-div-two ${item === selectedPledge ? 'active' :''}`}>
              <p>Enter your pledge</p>
              <div>
                <form>
                  <label>$</label>
                  <input className={error ? 'error' : ''} type="text" ref={input[item.pledgeInput]} />
                </form>
                {error && <p className='error-text'>{errorText}</p>}
                <button onClick={() => {pledging();}}>Continue</button>
              </div>
            </div>
          </section>
        ))}
    </div>
  )
}

export default PledgeChoose;