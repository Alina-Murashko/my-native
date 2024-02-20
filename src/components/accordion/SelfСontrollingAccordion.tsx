import { useReducer, useState } from "react"
import { StateType, reducer } from "./reducer";

type PropsSelfAccordion = {
    titleValue: string
    menu: string[]
    onChange: (calapsed: boolean) => void;
}



export const SelfControllingAccordion = (props: PropsSelfAccordion) => {
console.log('Accordion rendering') 
//const [collapsed,setCollapsed] = useState<boolean>(false);
const [collapsed, dispatchCollapsed] = useReducer(reducer,{ collapsed:false})


//const onClickHandler = (collapsed: boolean)
const onClickHandler = (collapsed: StateType) => {
    //setCollapsed(collapsed);
    //props.onChange(collapsed);
    dispatchCollapsed({type: 'TOOGGLE_COLLAPSED'});
    props.onChange(collapsed.collapsed);
    
}

    return(
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => onClickHandler(collapsed)}  />
            {collapsed.collapsed && <AccordionBody menu={props.menu}/>}
            
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick = {() => props.onClick()}> {props.title}</h3>
    )
}


type AccordionBodPropsType = {
 menu : string[]
}

function AccordionBody(props :AccordionBodPropsType) {
    console.log('AccordionBody rendering');

    const menuMap = props.menu.map((m) => {
        return (<li>{m}</li>);
    })
    return (
        <ul>{menuMap}</ul>
    )
}