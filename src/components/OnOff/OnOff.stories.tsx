import { useState } from "react";
import { OnOff } from "./OnOff";
import { action } from '@storybook/addon-actions'

export default {
    title : ' OnOff ',
    component: OnOff
}

export const OnOffTestStories = () => {
    const [onOff, setOnff] = useState<boolean>(false)
    return <OnOff onClick={setOnff} onOff={onOff}/>
}

const actionClick = action('on or of clicked')

export const OnTestAction = () =>  <OnOff onClick={actionClick} onOff={true}/>
export const OffTestAction = () =>  <OnOff onClick={actionClick} onOff={false}/>

