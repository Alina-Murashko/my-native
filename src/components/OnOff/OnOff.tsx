import { useState } from "react"


type OnOffType = {
    onOff?: boolean
}




export const OnOff = (props: OnOffType) => {

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

    return(
        
        <div style={StyleWrapper}>
            <div style={StyleOn} onClick={() => setOnOff(true)}>On</div>
            <div style={StyleOff} onClick={() => setOnOff(false)}>Off</div>
            <div style={StyleIndicator}></div>
        </div>
    )
}