
export type TechnologiesType = {
    id: number
    title: string
}

export type CityType = {
    title: string
    countryTitle: string
        
}

export type AddressType = {
    streetTitle: string
    city: CityType
}

export type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}



export const student : StydentType = {
    id: 1,
    'name': "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.countryTitle)
console.log(student.technologies[0].id)


