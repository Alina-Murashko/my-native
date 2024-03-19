import React, { useState } from "react"

export default {
    title: 'React memo demo'
}

const usersStart = ['Alina','Sasha','Vera','Lesha']

const NewMessagesCounter = (props:{count: number}) => {
    console.log('NewMessagesCounter')
    return <div>{props.count}</div>
}

const UsersSecreet = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>{props.users.map((u: string,i: number) => {
            return <div key={i}>{u}</div>
    })}</div>
}
const Users = React.memo(UsersSecreet)

export const Example = () => {
    const [counter,setCounter] =  useState<number>(0)
    const [users,setUsers] =  useState<Array<string>>(usersStart)
    return <>
        <button onClick={() => setUsers(el => ([...el,'Olya']))}>+ user</button>
        <button onClick={() => setCounter(counter => ++counter)}>+ counter</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}