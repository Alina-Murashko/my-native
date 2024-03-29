type ActionType = {
    type: string
    payload?: {

    }
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOOGGLE_COLLAPSED': 
        return{...state, collapsed: !state.collapsed}
        default: return state
    }  
    
}