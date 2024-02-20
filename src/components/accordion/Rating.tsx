
import { useState } from "react"




export type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export const Rating = (props: RatingType) => {
 
   

    return (<div>
                <Star title={"Star"} onClick={() => props.onClick(1)} value={props.value > 0}/> 
                <Star title={"Star"} onClick={() => props.onClick(2)} value={props.value > 1}/> 
                <Star title={"Star"} onClick={() => props.onClick(3)} value={props.value > 2}/> 
                <Star title={"Star"} onClick={() => props.onClick(4)} value={props.value > 3}/> 
                <Star title={"Star"} onClick={() => props.onClick(5)} value={props.value > 4}/> 
            </div>
    )
}
type SelfControlingStarType = {
    value : boolean
    title: string
    onClick : () => void
}


const Star = (props : SelfControlingStarType) => {
       return  <span onClick={() => props.onClick()}>{props.value ? <b>star</b> : 'star'}</span>     
}