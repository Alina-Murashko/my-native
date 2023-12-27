import { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/accordion/Rating';
import { SelfControlingRating } from './components/accordion/SelfControllingRating';

import { SelfControllingAccordion } from './components/accordion/SelfСontrollingAccordion';
import { SelfControllingOnOff } from './components/OnOff/SelfControllingOnOff';


function App() {
  {console.log('App-rendering')}

  const [valueRating,setValueRating] = useState< 0 | 1 | 2 | 3 | 4 | 5>(0);
  const [collapsetAccordion, setcollapsetAccordion] = useState<boolean>(false);
  const [onOff,setOnOff] = useState<boolean>(false)

  const menu = ['all','active','completed']
  const user = ['kera', 'vova', 'sasha', 'gosha']

  return (
    <div className="App">
      <div>
        <Accordion menu={menu} titleValue={'menu'} collapsed = {collapsetAccordion} onClick = {setcollapsetAccordion}/>
      </div>
      <div>
        <Rating value={valueRating} onClick={setValueRating}/>
      </div>
      <SelfControllingOnOff onOff={onOff} onClick={setOnOff}/>
    </div>
  );
}

export default App;
