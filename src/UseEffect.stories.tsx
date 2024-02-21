import { useEffect, useLayoutEffect, useState } from "react"

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    const [counter,setCounter] = useState(1);
    const [fake,setFake] = useState(1)

    console.log("Rerender")

    useEffect(() => {
       
        console.log('аналог componentDidUpdate')
        document.title = counter.toString()
    })
    useEffect(() => {
     
        console.log('1 разб и когда изменится counter')
        document.title = counter.toString()
    },[counter])

    useEffect(() => {
        
        console.log(' аналог componentDidMount Mounting')
        document.title = counter.toString()
    },[])

    useEffect(() => {
        console.log('')
        document.title = counter.toString()
        return () => {
           console.log('аналог componentWillUnmount - willunmount') 
        }
    })

    useLayoutEffect(() => {
        console.log('До монтироавния')
    },[counter])
    return (
    <>
   
   <div>  Hello <span>{counter}</span> <span>{fake} </span> </div> 
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => setFake(fake + 1)}>+</button>
    </>
    )
}
