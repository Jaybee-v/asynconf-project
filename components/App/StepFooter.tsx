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
            <div className="flex justify-evenly m-4 group px-8 w-full">
                {currentStep > 0 && (
                    <Button
                        variant={"outline"}
                        onClick={() => setCurrentStep(0)}
                    >
                        Qui sommes-nous ?
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
                        className={`${
                            disabled ? "cursor-wait" : "cursor-pointer"
                        }`}
                        disabled={disabled}
                    >
                        Essayer une nouvelle simulation
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
            </div>
        </CardFooter>
    )
}
