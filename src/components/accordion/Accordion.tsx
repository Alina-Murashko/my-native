import { useState } from "react"

type PropsSelfAccordion = {
    titleValue: string
    menu: string[]
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export const Accordion = (props: PropsSelfAccordion) => {
console.log('Accordion rendering') 



    return(
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)}/>
            {props.collapsed && <AccordionBody menu={props.menu}/>}
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
        <h3 onClick={props.onClick}> {props.title}</h3>
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