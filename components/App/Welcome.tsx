"use client"
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { MdOutlineArrowRight } from "react-icons/md"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { StepFooter } from "./StepFooter"
import Image from "next/image"
import { StepHeader } from "./StepHeader"

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

const DESCRIPTION =
    " La Green Bank, fondée en 2022, est une institution financière novatrice axée sur la durabilité et l'impact environnemental positif. Son objectif principal est de catalyser des investissements et des initiatives qui favorisent la transition vers une économie verte et durable."

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
        <>
            <StepHeader  />
            <CardDescription  className="w-[70%] mx-auto mb-8 text-text p-4 text-lg text-center">
                <h1>

                La Green Bank, fondée en 2022, est une institution financière <span className="font-semibold me-1">
                    novatrice
                    </span>
                     axée sur la <span className="font-semibold me-1">
                        durabilité
                        </span>
                         et l&apos;<span className="font-semibold me-1">
                            impact environnemental positif
                            </span>
                            . Son objectif principal est de <br/><span className="font-semibold me-1 text-primary">
                                catalyser des investissements et des initiatives qui favorisent la transition vers une économie verte et durable
                                </span>
                                .
                </h1>
</CardDescription>
            <CardContent>
                <section className="flex flex-col md:grid grid-cols-2 gap-y-4 justify-evenly  items-center mx-8 relative w-full">
                    <p className="italic text-sm w-64 md:w-96 mx-auto">
                    Vous pouvez poursuivre sans compléter ces informations, cependant, en les partageant, vous bénéficierez d&apos;un historique de recherche personnalisé pour une expérience plus enrichissante.
                    </p>
                    <div className="w-full mx-auto">
                        <Label>Email</Label>
                        <Input
                            placeholder="Email"
                            className="w-96"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full  mx-auto lg:ps-20">
                        <Label className="">Nom</Label>
                        <Input
                            placeholder="Nom"
                            className="w-96 "
                            value={familyName}
                            onChange={(e) => setFamilyName(e.target.value)}
                        />
                    </div>
                    <div className="w-full mx-auto">
                        <Label>Prénom</Label>
                        <Input
                            placeholder="Prénom"
                            className="w-96"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
        </>
    )
}
