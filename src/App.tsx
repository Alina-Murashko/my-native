import './App.css';
import { OnOff } from './components/OnOff/OnOff';
import { SelfControlingRating } from './components/accordion/SelfControllingRating';

import { SelfControllingAccordion } from './components/accordion/SelfСontrollingAccordion';


function App() {
  {console.log('App-rendering')}

  const menu = ['all','active','completed']
  const user = ['kera', 'vova', 'sasha', 'gosha']
  return (
    <div className="App">
      <div>
        <SelfControllingAccordion menu={menu} titleValue='Menu'/>
        <SelfControllingAccordion menu={user} titleValue='User'/>
      </div>
      <div>
        <SelfControlingRating/>
      </div>
      <OnOff  onOff={false}/>
    </div>
  );
}

export default App;
