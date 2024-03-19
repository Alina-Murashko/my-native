import { useState } from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    return 12345678975
}
export const Example = () => {
    console.log('Example');
    const [counter,setCounter] = useState<number>(generateData);
    
    const change = (state: number) => state + 1
    return (
    <div>
          <button onClick={() => setCounter(change)}>+</button>
            {counter}
    </div>)

}