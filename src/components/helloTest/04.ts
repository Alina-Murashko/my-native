import { CityType, GovernmentType } from "./02_02";


const age = [18,20,22,1,100,90,14]

const predicate = (age: number) => {
    return age > 91;
}

const oldAges = [100]; // >90

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]  

// <160

const cheapCourses = (courses: CourseType) => {
    return courses.price < 160;
}

const chipCourses = [
    {title: 'CSS', price: 100},
    {title: 'REACT', price: 150},

]

export const demolishHousesOnTheStreet = (city:CityType, street: string) => {
 city.houses = city.houses.filter(el => el.address.street.title !== street);

}

export const getBuildingswWithStaffCountGreaterThen = ( governmentBuildings: GovernmentType[], number: number) => {
    return  governmentBuildings.filter(el => el.staffCount > number)
}