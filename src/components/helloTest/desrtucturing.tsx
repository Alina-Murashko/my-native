import React, { useState } from "react"

export type PropsType = {
    name: string,
    age: number,
    lessons: Array<{title: string; name?: string}>
    adress: {
        street: {
           title: string
        }
    }
}

type ManPropsType= {
    title: string
    man: PropsType
    food: Array<string>
    car: { model:string}
}

// пример
function useAlinaState(massage: string ) {
    return [massage,function() {}]

}

//function use2AlinaState(massage: string ) {
    //return {massage: 'm',setMessage:function() {}}

//}


export const ManComponent:React.FC<ManPropsType> = ({title, man, ...propsik}) => {
   //const {title, man, ...propsik} = props;

   const [message, setMessage] = useState<string>('hello');

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{propsik.food}</div>
            <div>{propsik.car.model}</div>
        </div>
    )

}
