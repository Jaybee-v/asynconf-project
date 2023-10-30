"use client"
import React from "react"
import { Welcome } from "./Welcome"
import { Form } from "./Form"
import { Results } from "./Results"

export const StepWrapper = () => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [taux, setTaux] = React.useState(0)
    return (
        <>
            {currentStep === 0 && (
                <Welcome
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
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
        </>
    )
}
