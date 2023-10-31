"use client"
import React, { useEffect } from "react"
import { Welcome } from "./Welcome"
import { Form } from "./Form"
import { Results } from "./Results"
import { Card } from "../ui/card"
import HistoricalData from "@/data/data-historical.json"
import { Historical } from "@/models/historical"
import { Historical as HistoricalComponent } from "./Historical"

export const StepWrapper = () => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [taux, setTaux] = React.useState(0)

    const [name, setName] = React.useState("")
    const [familyName, setFamilyName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [userHistorical, setUserHistorical] = React.useState<any | null>(null)
    const [refreshHistorical, setRefreshHistorical] = React.useState(false)

    useEffect(() => {
        const historical = HistoricalData.historical
        console.log("HISTORICAL", historical)
        const normalizedEmail = email.toLowerCase() // Vous pouvez normaliser l'email en minuscules

        if (email) {
            const filteredHistorical = historical
                .filter((item) => {
                    return item.userEmail.toLowerCase() === normalizedEmail
                })
                .sort((a, b) => b.id - a.id)
                .slice(0, 5)
            console.log("ON CHERCHE")

            setUserHistorical(filteredHistorical)
            setRefreshHistorical(false)
            console.log(filteredHistorical)
        }
    }, [name, familyName, email, refreshHistorical])

    React.useEffect(() => {})

    return (
        <Card className="md:max-w-[80%] w-full min-h-[95vh] max-h-[95vh] h-full flex flex-col justify-around">
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
                    email={email!}
                    name={name!}
                    familyName={familyName!}
                    setRefreshHistorical={setRefreshHistorical}
                />
            )}
            {currentStep === 2 && (
                <Results
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep > 0 && userHistorical.length > 0 && (
                <HistoricalComponent userHistorical={userHistorical} />
            )}
        </Card>
    )
}
