import { Energy, Mileage, Type, Year } from "./data"

export type Historical = {
    id: number
    name?: string
    familyName?: string
    email: string
    type: Type
    energy: Energy
    mileage: Mileage
    year: Year
    bonus: number
    taux: number
}
