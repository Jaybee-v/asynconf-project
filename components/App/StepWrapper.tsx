"use client"
import React from "react"
import { Welcome } from "./Welcome"
import { Form } from "./Form"
import { Results } from "./Results"
import { Card } from "../ui/card"

export const StepWrapper = () => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [taux, setTaux] = React.useState(0)

    const [name, setName] = React.useState("")
    const [familyName, setFamilyName] = React.useState("")
    const [email, setEmail] = React.useState("")

    return (
        <Card className="md:max-w-[80%] w-full min-h-[95vh] max-h-[95vh] h-full flex flex-col ">
            {currentStep === 0 && (
                <Welcome
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    name={name}
                    familyName={familyName}
                    email={email}
                    setName={setName}
                    setFamilyName={setFamilyName}
                    setEmail={setEmail}
                />
            )}
            {currentStep === 1 && (
                <Form
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    setTaux={setTaux}
                    taux={taux}
                />
            )}
            {currentStep === 2 && (
                <Results
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}
        </Card>
    )
}
