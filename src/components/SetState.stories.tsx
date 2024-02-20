import { useState } from "react";

export default {
    title: 'useState demo'
}


function generateData() {
    return 12345678975
}
export const Example = () => {
    console.log('Example');
    const initValue = generateData()
    const [counter,setCounter] = useState<number>(generateData);
    return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    </>
}