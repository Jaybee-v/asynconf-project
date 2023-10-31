import React from "react"
import {  CardContent } from "../ui/card"
import { getSearch } from "@/lib/work-data"
import { Label } from "../ui/label"
import { StepFooter } from "./StepFooter"
import { DataSearch } from "@/models/data"
import { Upgrade } from "./Upgrade"
import { StepHeader } from "./StepHeader"

interface ResultsProps {
    setCurrentStep: (step: number) => void
    currentStep: number
}

const TITLE = "Votre taux d'emprunt est prêt !"


export const Results: React.FC<ResultsProps> = ({
    setCurrentStep,
    currentStep,
}) => {
    const dataSearch: DataSearch = getSearch()
    console.log(dataSearch)

    return (
        <>
            <StepHeader title={TITLE} />
            <CardContent className="flex gap-10 justify-center">
                <div className="flex flex-col h-20 justify-evenly">
                    <Label>Type du véhicule</Label>
                    <p className="w-full flex justify-end">{dataSearch.type.name.toUpperCase()}</p>
                </div>
                <div className="flex flex-col h-20 justify-evenly">
                    <Label>Energie consommée</Label>
                    <p className="w-full flex justify-end">{dataSearch.energy.label}</p>
                </div>
                <div className="flex flex-col h-20 justify-evenly">
                    <Label>Estimation de la distance parcourue annuelle</Label>
                    <p className="w-full flex justify-end">
                        {dataSearch.mileage.min} - {dataSearch.mileage.max} 000
                        km / an
                    </p>
                </div>
                <div className="flex flex-col h-20 justify-evenly">
                    <Label>Année de mise en circulation du véhicule</Label>
                    <p className="w-full flex justify-end">
                        {!dataSearch.year.max
                            ? "après " + dataSearch.year.min
                            : dataSearch.year.min + " - " + dataSearch.year.max}
                    </p>
                </div>
            </CardContent>
            <section className="w-fit mx-auto">
                <h2>
                    Votre taux d&apos;emprunt après calcul est de :
                    <span className="text-xl font-bold tracking-wider">
                        {" " + dataSearch.taux + " "}
                    </span>
                    %
                </h2>
            </section>
            <Upgrade data={dataSearch} />
            <StepFooter
                setCurrentStep={setCurrentStep}
                onSubmit={() => setCurrentStep(1)}
                currentStep={currentStep}
                disabled={false}
            />
        </>
    )
}
