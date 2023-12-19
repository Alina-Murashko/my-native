export type StreetType = {
    title: string
}


export type Addreessype = {
    number: number
    street: StreetType
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: Addreessype
}

type StreetGovernmentType = {
    title: string
}


type AddressGovernmentType = {
    street: StreetGovernmentType
}

export type GovernmentType = {
    type: string
    budget: number
    staffCount: number
    address: AddressGovernmentType
}


export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentType[]
    citizensNumber: number
}