export type Energy = {
    label: string
    score: number
}

export type Mileage = {
    min: number
    max: number
    score: number
}

export type Type = {
    name: string
    minWeight: number
    maxWeight: number
    score: number
}

export type Year = {
    min: number
    max: number | null
    score: number
}

export type DataSearch = {
    type: Type
    energy: Energy
    mileage: Mileage
    year: Year
    bonus: number
    taux: number
}