import { MouseEvent } from "react"

export const User = () => {

    const deleteUser = (e:MouseEvent<HTMLButtonElement>)=> {
        debugger
        console.log(e.currentTarget.name)
        alert('deleted')
    }
    const saveUser = (e:MouseEvent<HTMLButtonElement>)=> {
        console.log(e.currentTarget.name)
        alert('save')
    }

    return (
        <div>Alina
            <button name='delete' onClick={deleteUser}>+</button>
            <button name='save' onClick={deleteUser}>-</button>
        </div>
    )
}

