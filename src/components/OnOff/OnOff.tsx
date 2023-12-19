import styled from "styled-components"
import { Element } from "./Element"
import { ColorType } from "../../App"
import { useState } from "react"


export type TypeColor = {
    color?:ColorType
  }


  

export const OnOff = (props: TypeColor) => {

    

    return (
        <StyledOnOff>

            { props.color === "green" ? <Element color={props.color} name={"ON"} /> : <Element name={"ON"} /> }
            { props.color === "red" ? <Element color={props.color} name={"OFF"}/> : <Element name={"OFF"}/>}
            { props.color === "green" ? <Element color={props.color} borderRadius={50} marginLeft={100}/> :
             props.color === "red" ? <Element color={props.color} borderRadius={50} marginLeft={100}/>:
             <Element borderRadius={50} marginLeft={100}/>}
            
        </StyledOnOff>
    )
}

const StyledOnOff = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`