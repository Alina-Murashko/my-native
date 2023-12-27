import { useState } from "react"
import { OnOff } from "./OnOff"


type OnOffType = {
    onOff?: boolean
    onChange: (onOff: boolean) => void}


    
export const SelfControlOnOff = (props: OnOffType) => {

    console.log('OnOff-rendering')

    const [onOff,setOnOff] = useState<boolean>(true)
    
    console.log(onOff);
    
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
        background: onOff ? 'green' : "grey"
    
    }
    
    const StyleOff = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        background: onOff === undefined ? 'grey': !onOff ? 'red' : "grey"
    
    }
    
    const StyleIndicator = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '2px solid black',
        background:  onOff === undefined ? 'grey' : onOff ? 'green' : 'red'
    
    }

    const  OnClickHandler =  (onOff: boolean) => {
        setOnOff(!onOff);
        props.onChange(onOff)
    }

    return(
        
        <div style={StyleWrapper}>
            <div style={StyleOn} onClick={() => OnClickHandler(onOff)}>On</div>
            <div style={StyleOff} onClick={() => OnClickHandler(onOff)}>Off</div>
            <div style={StyleIndicator}></div>
        </div>
    )
}