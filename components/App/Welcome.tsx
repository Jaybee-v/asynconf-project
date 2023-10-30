"use client"
import React from "react"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { MdOutlineArrowRight } from "react-icons/md"

interface WelcomeProps {
    currentStep: number
    setCurrentStep: (step: number) => void
}

export const Welcome: React.FC<WelcomeProps> = ({
    currentStep,
    setCurrentStep,
}) => {
    const [score, setScore] = React.useState(0)
    return (
        <Card className="md:max-w-[80%] w-full min-h-[250px] h-full flex flex-col justify-between">
            <CardContent>
                <section>
                    <h1 className="text-5xl font-semibold tracking-wide text-text">
                        Green Bank
                    </h1>
                    <p className="w-[70%] mx-auto my-8 bg-background text-primary p-4">
                        La Green Bank, fondée en 2022, est une institution
                        financière novatrice axée sur la durabilité et
                        l&apos;impact environnemental positif. Son objectif
                        principal est de catalyser des investissements et des
                        initiatives qui favorisent la transition vers une
                        économie verte et durable.
                    </p>
                </section>

                <CardFooter>
                    <div className="flex justify-end m-4 group">
                        <Button onClick={() => setCurrentStep(1)}>
                            {currentStep === 0 ? "Commencer" : "Suivant"}
                            <MdOutlineArrowRight
                                size={20}
                                className="ms-2 animate-ping "
                            />{" "}
                            <MdOutlineArrowRight
                                size={20}
                                className="ms-2 animate-ping delay-75"
                            />{" "}
                        </Button>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
