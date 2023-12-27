import { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/accordion/Rating';
import { SelfControlingRating } from './components/accordion/SelfControllingRating';

import { SelfControllingAccordion } from './components/accordion/SelfСontrollingAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { SelfControlOnOff } from './components/OnOff/SelfControlOnOff';



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
        <Accordion menu={menu} titleValue={'menu'} 
                  collapsed = {collapsetAccordion} onClick = {setcollapsetAccordion}/>
        <SelfControllingAccordion menu={menu} titleValue={'menu'} onChange={setcollapsetAccordion}/>{collapsetAccordion.toString()}
      </div>
      <div>
        <div>
          <Rating value={valueRating} onClick={setValueRating}/>
        </div>
        <div>
          <SelfControlingRating onChange={setValueRating}/>{valueRating.toString()}
        </div>
        <div>
          <OnOff onOff={onOff} onClick={setOnOff}/>
        </div>
        <div>
        <SelfControlOnOff onChange = {setOnOff}/>{onOff.toString()}
        </div>
    </div>
  </div>
  );
}

export default App;
