import { useState, useRef } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Pledge from './Pledge';
import data from './myData.json';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);
  const [headerControl, setHeaderControl] = useState(false);
  const [headerControlText, setHeaderControlText] = useState('hamburger');
  const [pledged, setPledged] = useState(false);
  const [letsPledge, setLetsPledge] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const input = {
    first : useRef(),
    second : useRef(),
    third : useRef(),
    fourth : useRef(),
  };

  const scrollToTop = (amount) => {
    window.scrollTo({
      top : amount,
      behavior : 'smooth',
    });
  };

  const wePledging = (pledge) => {
    setSelectedPledge(pledge);
    setLetsPledge(!letsPledge);
    setError(false);
    setErrorText('');
    // scrollToTop();
  };

  
  const pledging = () => {
    const selectedInput = input[selectedPledge.pledgeInput];

    if((selectedInput.current.value === "") || (parseFloat(selectedInput.current.value) < 0.1)) {
      setPledged(false);
      setError(true);
      setErrorText("can't be empty");
    } else if ((parseFloat(selectedInput.current.value) < selectedPledge.pledgeMore)) {
      setPledged(false);
      setError(true);
      setErrorText(`cant be less than $${selectedPledge.pledgeMore}`);
    } else {
      setPledged(true);
      setError(false);
      setErrorText('');
      scrollToTop(200);
    }
  };

  const clickedPledge = () => {
    setClicked(!clicked);
    setPledged(false);
    setLetsPledge(false);
    setError(false);
    setErrorText('');
    // scrollToTop(0);
    setSelectedPledge(!selectedPledge);
  };

  const headerController = () => {
    setHeaderControl(!headerControl);
    if (headerControl === false) {
      setHeaderControlText('close-menu');
    } else {
      setHeaderControlText('hamburger');
    }
  };

  return (
    <>
      {clicked && <Pledge scrollToTop={scrollToTop} error={error} errorText={errorText} input={input} selectedPledge={selectedPledge} letsPledge={letsPledge} wePledging={wePledging} pledged={pledged} pledging={pledging} clickedPledge={clickedPledge} />}
      <Header scrollToTop={scrollToTop} headerControl={headerControl} headerController={headerController} headerControlText={headerControlText} />
      <MainPage scrollToTop={scrollToTop} wePledging={wePledging} clickedPledge={clickedPledge} />
    </>
  )
}

export default App
