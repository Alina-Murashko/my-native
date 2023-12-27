
import { useState } from "react"


type SelfControlingRatingPropsType =  0 | 1 | 2 | 3 | 4 | 5;
export const SelfControlingRating = () => {
 
    const [valueRating, setValueRating] = useState<SelfControlingRatingPropsType>(0)


   
      
   

    return (<div>
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 0} value = {1}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 1} value = {2}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 2} value = {3}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 3} value = {4}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 4} value = {5}/> 
            </div>
    )
}
type SelfControlingStarType = {
    selected : boolean
    title: string
    onClick : ( value :SelfControlingRatingPropsType ) => void
    value : SelfControlingRatingPropsType
}


const Star = (props : SelfControlingStarType) => {
   // return props.value ? <span onClick={() => props.onClick()}><b>{props.title}</b></span> : <span onClick={() => props.onClick()}>{props.title}</span>;
   return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>star</b> : 'star'}</span> 
}
