import { UserType, UsersTypeAdd } from "./09.test"


var user = {
    name: 'Dimych',
    age : 32
}

export function increaseAge(user:UserType) {
    user.age++
}