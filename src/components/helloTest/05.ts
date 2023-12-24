import { GovernmentType, HousesType } from "./02_02"

export type PeopleType = {
    name: string
    age: number
}
type DevType = {
    stack: string[],
    firstName: string,
    lastName: string
}

const people : PeopleType[] = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dnitry Sidorov", age: 18},
]

const transformator= (man:PeopleType) => ({ stack: ['css, html','js','tdd','react'],
    firstName: man.name.split(' ')[0], lastName:man.name.split(' ')[1],
    })


const devs : DevType[]= [
    {
        stack: ['css, html','js','tdd','react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css, html','js','tdd','react'],
        firstName: 'Alexander', lastName: ' Petrov'
    },
    {
        stack: ['css, html','js','tdd','react'],
        firstName: 'Dnitry', lastName: 'Sidorov'
    }
];

const dev2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2])
]

const dev3 = people.map(transformator);
const dev4 = people.map((man:PeopleType) => ({ stack: ['css, html','js','tdd','react'],
firstName: man.name.split(' ')[0], lastName:man.name.split(' ')[1],
}))

const messages = people.map(el => `Hello ${el.name.split(' ')[0]}.Welcom to IT- Incubator!`)

export function createMessage(people: PeopleType[])  {
    return people.map(el => `Hello ${el.name.split(' ')[0]}.Welcom to IT- Incubator!`)
}

export function getStrretsTitleOfGovermentsBuldings(governmentBuildings: GovernmentType[]) {
    return governmentBuildings.map(el => el.address.street.title)
}

export function getStrretsTitleOfHouses(houses: HousesType[]) {
    return houses.map(hous => hous.address.street.title);
}