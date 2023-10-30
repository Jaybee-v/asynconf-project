import React from "react"
import { MdOutlineArrowRight } from "react-icons/md"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { getSearch } from "@/lib/work-data"
import { Label } from "../ui/label"

interface ResultsProps {
    setCurrentStep: (step: number) => void
    currentStep: number
}

export const Results: React.FC<ResultsProps> = ({
    setCurrentStep,
    currentStep,
}) => {
    const dataSearch = getSearch()

    return (
        <Card>
            <CardHeader>
                Voici un résumé des informations que vous avez fourni. <br />{" "}
                Vous pouvez modifier les informations, ou valider si les
                informations sont correctes.
            </CardHeader>
            <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
                <div>
                    <Label>Type du véhicule</Label>
                    <p>{dataSearch.type.name.toUpperCase()}</p>
                </div>
                <div>
                    <Label>Energie consommée</Label>
                    <p>{dataSearch.energy.label}</p>
                </div>
                <div>
                    <Label>Estimation de la distance parcourue annuelle</Label>
                    <p>
                        {dataSearch.mileage.min} - {dataSearch.mileage.max} 000
                        km / an
                    </p>
                </div>
                <div>
                    <Label>Année de mise en circulation du véhicule</Label>
                    <p>
                        {!dataSearch.year.max
                            ? "après " + dataSearch.year.min
                            : dataSearch.year.min + " - " + dataSearch.year.max}
                    </p>
                </div>
                <section>
                    <h2>
                        Votre taux d&apos;emprunt après calcul est de :
                        <span className="text-xl font-bold tracking-wider">
                            {" " + dataSearch.taux + " "}
                        </span>
                        %
                    </h2>
                </section>
            </CardContent>
            <CardFooter className="w-full">
                <div className="flex justify-evenly m-4 group w-full">
                    {/* <Button className="bg-background text-gray-700 hover:bg-gray-200">
                        Modifier
                    </Button> */}
                    <Button onClick={() => setCurrentStep(1)}>
                        {currentStep === 2 && "Réaliser une nouvelle recherche"}
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 animate-ping`}
                        />{" "}
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 animate-ping delay-75`}
                        />{" "}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
