import { useEffect, useLayoutEffect, useState } from "react"

export default {
    title: 'UseEffect demo',
}

export const SetTimeoutExample = () => {
    const [counter,setCounter] = useState(1);
    const [fake,setFake] = useState(1)

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString();
    //         console.log("SetTimeoutExample")
    //     },1000)
    // },[counter])
    console.log('render');

       useEffect(() => {
        console.log("useeffect i am!")
        setInterval(() => {
           setCounter((counter) =>counter + 1)
            console.log("tick")
        },5000)
    },[])


    return (
    <>
        <div>  Hello <span>{counter}</span> <span>{fake} </span> </div> 
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
       
    </>
    )
}
