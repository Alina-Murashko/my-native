import { HousesType } from './../helloTest/02_02';
import { CityType, GovernmentType } from '../helloTest/02_02';
import { StydentType} from './../helloTest/02';


export const sum = (a: number, b: number) => {
    
    return  a+ b;
}

const res = sum( sum(1,2), sum(1,3) ) // идти изнутри снаружи

export function addSkill(st: StydentType, skill: string) {
    st.technologies.push(
        {id: new Date().getTime(),
        title: skill})
}

export function makeStudentActive(st: StydentType, act: boolean) {
    st.isActive = act;
}

export function doesStudentLiveIn(st: StydentType, city: string) {
    return st.address.city.title === city
}

export const addMoneyToBudget = (build: GovernmentType , budget: number) => {
    return build.budget += budget;
}

export const demolishHousesOnTheStreet = (c : CityType, s: string) => {
    c.houses.map(item => {
        if(item.address.street.title === s) {
            return item
        } 
    }) 
}

export const repairHouse = (c: CityType, number: number) => {
    c.houses[number].repaired === false 
    ? c.houses[number].repaired = true 
    : c.houses[number].repaired
}

export const toFireStaff = ( government: GovernmentType[], n: number, i: number) => {
    government[i].staffCount -= n;
}

export const toHireStaff = (c: CityType, n: number, i: number) => {
    c.governmentBuildings[i].staffCount += n;
}