import './App.css';
import { OnOff } from './components/OnOff/OnOff';


export type ColorType = "red" | "green";

function App() {

  return (
    <div className="App">
      <OnOff color={"green"}/>
    </div>
  );
}

export default App;
