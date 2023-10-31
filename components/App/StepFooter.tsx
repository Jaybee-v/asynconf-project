"use client"
import React from "react"
import { CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { MdOutlineArrowRight } from "react-icons/md"

interface StepFooterProps {
    currentStep: number
    setCurrentStep: (step: number) => void
    disabled: boolean
    onSubmit?: () => void
}

export const StepFooter: React.FC<StepFooterProps> = ({
    currentStep,
    setCurrentStep,
    disabled,
    onSubmit,
}) => {
    return (
        <CardFooter>
            <div className="flex flex-col-reverse md:flex-row justify-evenly gap-2 p-4 group px-8 w-full">
                {currentStep > 0 && (
                    <Button variant="outline" onClick={() => setCurrentStep(0)}>
                        Arrêter
                    </Button>
                )}
                {currentStep === 0 && (
                    <Button
                        onClick={onSubmit}
                        className={`${
                            disabled ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        disabled={disabled}
                    >
                        Commencer
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } `}
                        />{" "}
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } delay-75`}
                        />{" "}
                    </Button>
                )}
                {currentStep === 1 && (
                    <Button
                        onClick={onSubmit}
                        className={`${
                            disabled ? "cursor-wait" : "cursor-pointer"
                        }`}
                        disabled={disabled}
                    >
                        Suivant
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } `}
                        />{" "}
                        <MdOutlineArrowRight
                            size={20}
                            className={`ms-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } delay-75`}
                        />{" "}
                    </Button>
                )}
                {currentStep === 2 && (
                    <Button
                        onClick={onSubmit}
                        className={` ${
                            disabled ? "cursor-wait" : "cursor-pointer"
                        }`}
                        disabled={disabled}
                    >
                        <MdOutlineArrowRight
                            size={20}
                            className={`hidden md:block ms-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } `}
                        />{" "}
                        <MdOutlineArrowRight
                            size={20}
                            className={`hidden md:block ms-2 me-2 ${
                                !disabled ? "animate-ping" : "hidden"
                            } delay-75`}
                        />{" "}
                        Essayer une nouvelle simulation
                    </Button>
                )}
            </div>
        </CardFooter>
    )
}
