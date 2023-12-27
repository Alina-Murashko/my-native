import { useState } from "react"


type OnOffType = {
    onOff: boolean
    onClick: (onOff: boolean) => void
}




export const  SelfControllingOnOff = (props: OnOffType) => {

    console.log('OnOff-rendering')
    
    const StyleWrapper = {
        display: 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
         gap: '10px',
    }
    
    const StyleOn = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        background: props.onOff ? 'green' : "grey"
    
    }
    
    const StyleOff = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        background: props.onOff ? 'grey' : 'red',
        
        //props.onOff === undefined ? 'grey': !props.onOff ? 'red' : "grey"
    
    }
    
    const StyleIndicator = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '2px solid black',
        background:  props.onOff ? 'green' : 'red'
        //props.onOff === undefined ? 'grey' : props.onOff ? 'green' : 'red'
    
    }

    return(
        
        <div style={StyleWrapper}>
            <div style={StyleOn} onClick={() => props.onClick(!props.onOff)}>On</div>
            <div style={StyleOff} onClick={() => props.onClick(!props.onOff)}>Off</div>
            <div style={StyleIndicator}></div>
        </div>
    )
}