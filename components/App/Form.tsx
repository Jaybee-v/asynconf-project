"use client"
import React, { useEffect } from "react"
import dataCar from "@/data/data-car.json"
import dataEmprunt from "@/data/data-emprunt.json"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { BiSolidDownArrow } from "react-icons/bi"
import { CalcTaux } from "@/lib/functions"
import { setSearch } from "@/lib/work-data"
import { StepFooter } from "./StepFooter"
import { MdCarCrash, MdModeOfTravel, MdGroups3 } from "react-icons/md"
import { AiTwotoneThunderbolt } from "react-icons/ai"
import { FaCarOn } from "react-icons/fa6"

interface FormProps {
    setCurrentStep: (step: number) => void
    currentStep: number
    setTaux: (taux: number) => void
    taux: number
}

export const Form: React.FC<FormProps> = ({
    setCurrentStep,
    currentStep,
    setTaux,
    taux,
}) => {
    const types = dataCar.type
    const energies = dataCar.energy
    const mileages = dataCar.mileage
    const years = dataCar.year
    const passagers = dataEmprunt.passager

    const [typeScore, setTypeScore] = React.useState<number>(0)
    const [energyScore, setEnergyScore] = React.useState<number>(0)
    const [mileageScore, setMileageScore] = React.useState<number>(0)
    const [yearScore, setYearScore] = React.useState<number>(0)
    const [bonus, setBonus] = React.useState<number>(0)
    const [disabled, setDisabled] = React.useState<boolean>(true)

    useEffect(() => {
        let newScore = 0

        if (typeScore > 0) {
            newScore += typeScore
        }
        if (energyScore > 0) {
            newScore += energyScore
        }
        if (mileageScore > 0) {
            newScore += mileageScore
        }
        if (yearScore > 0) {
            newScore += yearScore
        }
        if (
            typeScore > 0 &&
            energyScore > 0 &&
            mileageScore > 0 &&
            yearScore > 0 &&
            bonus !== 0
        ) {
            const res = CalcTaux(newScore, bonus)
            setTaux(res)
            const saveData = {
                type: types.find((type) => type.score === typeScore),
                energy: energies.find((energy) => energy.score === energyScore),
                mileage: mileages.find(
                    (mileage) => mileage.score === mileageScore
                ),
                year: years.find((year) => year.score === yearScore),
                taux: res,
                bonus: bonus,
            }

            setSearch(saveData)
            setDisabled(false)
        }
    }, [
        typeScore,
        energyScore,
        mileageScore,
        yearScore,
        bonus,
        setTaux,
        types,
        energies,
        mileages,
        years,
    ])



    return (
        <Card className="w-[95%] md:max-w-[85%] lg:max-w-[70%] ">
            <CardHeader>
                Renseignez les différentes informations afin de calculer au
                mieux votre taux d&apos;emprunt
            </CardHeader>
            <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
                <div className="relative  inline-flex items-center gap-2 w-54">
                    <MdCarCrash size={20} color="" />
                    <select
                        value={typeScore.toString()}
                        onChange={(e) => setTypeScore(Number(e.target.value))}
                        className="block appearance-none w-full bg-background border border-border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-secondary"
                    >
                        <option value="0">Type du véhicule</option>
                        {types.map((type, index) => (
                            <option
                                key={"type_" + index}
                                value={type.score.toString()}
                            >
                                {type.name.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BiSolidDownArrow size={13} color="green" />
                    </div>
                </div>
                <div className="relative inline-flex items-center gap-2 w-54">
                    <AiTwotoneThunderbolt size={20} color="" />
                    <select
                        value={energyScore.toString()}
                        onChange={(e) => setEnergyScore(Number(e.target.value))}
                        className="block appearance-none w-full bg-background border border-border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-secondary"
                    >
                        <option value="0">Energie consommée</option>
                        {energies.map((energy, index) => (
                            <option
                                key={"energy_" + index}
                                value={energy.score.toString()}
                            >
                                {energy.label.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BiSolidDownArrow size={13} color="green" />
                    </div>
                </div>
                <div className="relative inline-flex items-center gap-2 w-54">
                    <MdModeOfTravel size={20} color="" />
                    <select
                        value={mileageScore.toString()}
                        onChange={(e) =>
                            setMileageScore(Number(e.target.value))
                        }
                        className="block appearance-none w-full bg-background border border-border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-secondary"
                    >
                        <option value="0">Trajet annuel estimé</option>
                        {mileages.map((mileage, index) => (
                            <option
                                key={"mileage_" + index}
                                value={mileage.score.toString()}
                            >
                                {mileage.min} - {mileage.max} 000 km / an
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BiSolidDownArrow size={13} color="green" />
                    </div>
                </div>
                <div className="relative inline-flex items-center gap-2 w-54">
                    <FaCarOn size={20} color="" />
                    <select
                        value={yearScore.toString()}
                        onChange={(e) => setYearScore(Number(e.target.value))}
                        className="block appearance-none w-full bg-background border border-border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-secondary"
                    >
                        <option value="0">
                            Mise en circulation du véhicule
                        </option>
                        {years.map((year, index) => (
                            <option
                                key={"year_" + index}
                                value={year.score.toString()}
                            >
                                {!year.max
                                    ? "après " + year.min
                                    : year.min + " - " + year.max}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BiSolidDownArrow size={13} color="green" />
                    </div>
                </div>
                <div className="relative inline-flex items-center gap-2 w-40">
                    <MdGroups3 size={20} color="" />
                    <select
                        value={bonus.toString()}
                        onChange={(e) => setBonus(Number(e.target.value))}
                        className="block appearance-none w-full bg-background border border-border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-secondary"
                    >
                        <option value="0">Passagers</option>
                        {passagers.map((passager, index) => (
                            <option
                                key={"passager_" + index}
                                value={passager.bonus.toString()}
                            >
                                {passager.number}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0  right-0 flex items-center px-2 text-gray-700">
                        <BiSolidDownArrow size={13} color="green" />
                    </div>
                </div>
            </CardContent>
            <StepFooter setCurrentStep={setCurrentStep} onSubmit={() => setCurrentStep(2)} currentStep={currentStep} disabled={disabled}/>
        </Card>
    )
}
