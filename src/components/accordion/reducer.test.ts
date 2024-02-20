import { useReducer } from "react"
import { StateType, reducer } from "./reducer"

test('Reducer changes collapsed ', () => {
    const state: StateType = {
        collapsed: false
    }
    const action = {
        type: 'TOOGGLE_COLLAPSED'
    }

    const endState =reducer(state,action);

    expect(state.collapsed).toBe(false);
    expect(endState.collapsed).toBe(true);
    expect(state.collapsed).toBeRequired
})