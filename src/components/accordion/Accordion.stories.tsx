import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from "./Accordion";
import { useState } from 'react';

import { action } from '@storybook/addon-actions'

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
}
 

export default meta;*/

export default {
    component: Accordion
}

type Story = StoryObj<typeof Accordion>; 
const menu = ['all','active','completed']

export const FirstStory: Story = {
    args: {
        menu: menu,
        titleValue: 'collapsed',
        collapsed: false,
        onClick: () => {}
    }

}

const actionClick = action('open or collapsed clicked')

export const  ActionTestAccordion = () => <Accordion menu={menu} titleValue={'collapsed'} 
collapsed = {false} onClick = {actionClick}/>;

export const CollapsedAccordion = () => {
    return <div><Accordion menu={menu} titleValue={'collapsed'} 
    collapsed = {false} onClick = {() => {}}/></div>
}


export const OpenAccordion = () => {
    return <div><Accordion menu={menu} titleValue={'open'} 
    collapsed = {true} onClick = {() => {}}/></div>
}
export const ClickAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <div><Accordion menu={menu} titleValue={'Click'} 
    collapsed = {collapsed} onClick = {() => {setCollapsed(!collapsed)}}/></div>
}
