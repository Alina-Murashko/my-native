
import { useState } from "react"


type SelfControlingRatingType =  0 | 1 | 2 | 3 | 4 | 5;

type  SelfControlingRatingPropsType = {
    onChange: (valueRating: SelfControlingRatingType) => void
}

export const SelfControlingRating = (props: SelfControlingRatingPropsType) => {
 
    const [valueRating, setValueRating] = useState<SelfControlingRatingType>(0)

    return (<div>
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 0} value = {1} onChange={props.onChange}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 1} value = {2} onChange={props.onChange}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 2} value = {3} onChange={props.onChange}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 3} value = {4} onChange={props.onChange}/> 
                <Star title={"Star"} onClick={setValueRating} selected={valueRating > 4} value = {5} onChange={props.onChange}/> 
            </div>
    )
}
type SelfControlingStarType = {
    selected : boolean
    title: string
    onClick : (value :SelfControlingRatingType) => void
    value : SelfControlingRatingType
    onChange: (valueRating: SelfControlingRatingType) => void
}


const Star = (props : SelfControlingStarType) => {
   // return props.value ? <span onClick={() => props.onClick()}><b>{props.title}</b></span> : <span onClick={() => props.onClick()}>{props.title}</span>;
    const onClickHandler = (value: SelfControlingRatingType) => {
        props.onClick(value);
       props.onChange(value);
    }

   return <span onClick={() => onClickHandler(props.value)}>{props.selected ? <b>{props.title}</b> : props.title}</span> 
}
