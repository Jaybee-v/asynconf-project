"use client"
import React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { MdOutlineArrowRight } from "react-icons/md"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { StepFooter } from "./StepFooter"

interface WelcomeProps {
    currentStep: number
    setCurrentStep: (step: number) => void
    name: string
    familyName: string
    email: string
    setName: (name: string) => void
    setFamilyName: (familyName: string) => void
    setEmail: (email: string) => void
}

export const Welcome: React.FC<WelcomeProps> = ({
    currentStep,
    setCurrentStep,
    name,
    familyName,
    email,
    setName,
    setFamilyName,
    setEmail,
}) => {
    return (
        <Card className="md:max-w-[80%] w-full min-h-[250px] h-full flex flex-col justify-between">
            <CardHeader className="w-fit mx-auto border-b border-primary">
                <h1 className="text-5xl font-semibold tracking-wide text-text text-center">
                    Green Bank
                </h1>
            </CardHeader>
            <CardContent>
                <section>
                    <p className="w-[70%] mx-auto my-8 bg-background text-primary p-4">
                        La Green Bank, fondée en 2022, est une institution
                        financière novatrice axée sur la durabilité et
                        l&apos;impact environnemental positif. Son objectif
                        principal est de catalyser des investissements et des
                        initiatives qui favorisent la transition vers une
                        économie verte et durable.
                    </p>
                </section>
                <section className="flex flex-col  items-center mx-auto relative w-full">
                    <p className="italic text-sm absolute w-72 top-14 right-0">
                        Vous pouvez continuer sans remplir ces informations,
                        mais vous n&apos;aurez pas d&apos;historique de
                        recherche
                    </p>
                    <div className="w-96">
                        <Label>Nom</Label>
                        <Input
                            placeholder="Nom"
                            value={familyName}
                            onChange={(e) => setFamilyName(e.target.value)}
                        />
                    </div>
                    <div className="w-96">
                        <Label>Prénom</Label>
                        <Input
                            placeholder="Prénom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-96">
                        <Label>Email</Label>
                        <Input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </section>
            </CardContent>
            <StepFooter
                onSubmit={() => setCurrentStep(1)}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                disabled={false}
            />
        </Card>
    )
}
