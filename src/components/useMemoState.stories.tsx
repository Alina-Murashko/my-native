import React, { useMemo, useState } from "react"

export default {
    title: 'useMemo demo'
}

export const Example = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
   
    let resaltB: number = 1;


    let resultATest = useMemo(() => {
        let resaltA: number = 1;
        for(let i = 1; i <= a;i++) {
            let fake: number= 0;
            while(fake < 1000000000) {
                fake++
            }
            resaltA = resaltA*i;
        }
        return resaltA
    },[a])
   

    for(let i = 1; i <= b;i++) {
        resaltB = resaltB*i
    }

   return (
        <div>
            <input value={a} onChange={(e)=> setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={(e)=> setB(Number(e.currentTarget.value))} />
            <div> result for {resultATest}</div>
            <div>result for {resaltB}</div>
        </div>
   )
}



const UserSecret = (props:{users:Array<any>}) => {
   console.log('user rerender')
    return (
        <div> {props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
    )
}

const User = React.memo(UserSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');

        const [counter,setCounter] = useState(0);
        const [users,setUsers] = useState(['Alina','Sasha','Lesha'])

  
    const result: Array<string> = useMemo(() => {
        const result = users.filter(el => el === 'Alina');
        setUsers(users)
        return result},[users])
    
   
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <User users={users}/>
        <button onClick={() => setUsers([...users,'Sasha'])}>+ user</button>
    </div>
}