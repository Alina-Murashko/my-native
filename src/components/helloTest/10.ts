export type UserType = {
    name: string
    hair: number 
    address: {city:string,house: {number: number,apartment: number}}
}

export type LapTopType = {
   title:string
}
export type UserWithLapTop = UserType &{
    laptop: LapTopType
}

export type UserWithBooks = {
    books: string[];
}
export type Company = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: Company[];
}

export type CompaniesType = {
  [key:string ]: Company[]
}

export function hairDresser(u: UserType,power:number) {
    const copy = {
        ...u,
        hair : u.hair /power,
    }
   return copy
}

export function moveUser(u: UserWithLapTop, city: string, number: number) {
    const copy = {
        ...u,
        address: {...u.address, city, house: {...u.address.house,number}}
    }
   return copy
}

export function upgradeUserLaptop(u: UserWithLapTop, laptop: string) {
    const copy = {
        ...u,
       laptop: {...u.laptop,
        title:laptop}
    }
   return copy
}
export function upgradeUserLaptopBook(u: UserWithLapTop&UserWithBooks, laptop: string):UserWithLapTop&UserWithBooks {
    const copy = {
        ...u,
       laptop: {...u.laptop,
        title:laptop}
    }
   return copy
}

export function addNewBook (u: UserWithLapTop&UserWithBooks,book:string[]) {
    const copy ={
        ...u,
        books: [...u.books,...book]
    }
    return copy
}

export function changebook(u: UserWithLapTop&UserWithBooks,book1:string,book2: string) {
    const copy ={
        ...u,
        books: u.books.map(el => el === book1? el=book2: el)
    }
    return copy
}

export function removeBook(u: UserWithLapTop&UserWithBooks,book1:string) {
    const copy ={
        ...u,
        books: u.books.filter(el => el !== book1)
    }
    return copy
}

export function updateCompany(u: UserWithLapTop&UserWithBooks&WithCompaniesType,
    id: number,title:string) {
    return {
        ...u,
        companies: u.companies.map(comp => comp.id === id ? {...comp,title} : comp)
    }
}

export function updateCompanyAssociative(company: CompaniesType,userName: string,
                                        companyId: number,newTitle: string) {
    return {
       ...company,[userName]: company[userName].map(comp => comp.id === companyId ? {...comp,title: newTitle}: comp)
    }
}