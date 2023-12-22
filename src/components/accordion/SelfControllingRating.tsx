
import { useState } from "react"


type SelfControlingRatingPropsType =  0 | 1 | 2 | 3 | 4 | 5;
export const SelfControlingRating = () => {
 
    const [valueRating, setValueRating] = useState<SelfControlingRatingPropsType>(0)


    const onclickStarHendler = (value: SelfControlingRatingPropsType) => {
       setValueRating(value)
    }

    return (<div>
                <Star title={"Star"} onClick={() => onclickStarHendler(1)} value={valueRating > 0}/> 
                <Star title={"Star"} onClick={() => onclickStarHendler(2)} value={valueRating > 1}/> 
                <Star title={"Star"} onClick={() => onclickStarHendler(3)} value={valueRating > 2}/> 
                <Star title={"Star"} onClick={() => onclickStarHendler(4)} value={valueRating > 3}/> 
                <Star title={"Star"} onClick={() => onclickStarHendler(5)} value={valueRating > 4}/> 
            </div>
    )
}
type SelfControlingStarType = {
    value : boolean
    title: string
    onClick : () => void
}


const Star = (props : SelfControlingStarType) => {

  
       return  props.value ? <span onClick={() => props.onClick}><b>{props.title}</b></span> : <span onClick={() => props.onClick}>{props.title}</span>
        
}