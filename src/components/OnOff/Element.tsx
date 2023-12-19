import React from "react"
import styled from "styled-components"
import { TypeColor } from "./OnOff";
import { ColorType } from "../../App";



type ElementPropsType = {
    name?: string;
    borderRadius?: number;
    marginLeft?: number;
    color?: ColorType
}

export const Element = (props: ElementPropsType) => {
return (
    <StyledElement color={props.color} 
                    marginLeft={props.marginLeft} 
                    borderRadius={props.borderRadius}>{props.name}</StyledElement>
)
}

const StyledElement = styled.div<ElementPropsType>`
    border: 1px solid black;
    width: 200px;
    height: 200px;

    display:flex;
    justify-content: center;

    border-radius: ${props => props.borderRadius}%;
    margin-left: ${props => props.marginLeft}px;
    background-color: ${props => props.color || "grey"};

`

