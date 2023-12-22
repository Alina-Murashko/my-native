import { useState } from "react"

type PropsSelfAccordion = {
    titleValue: string
    menu: string[]
}



export const SelfControllingAccordion = (props: PropsSelfAccordion) => {
console.log('Accordion rendering') 
const [collapsed,setCollapsed] = useState<boolean>(false)

    return(
        <div>
            <AccordionTitle title={props.titleValue}/><button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {collapsed && <AccordionBody menu={props.menu}/>}
            
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3> {props.title}</h3>
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